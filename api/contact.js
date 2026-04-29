export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Green Hill Contact Form <onboarding@resend.dev>',
        to: 'yaronmadmon@gmail.com',
        subject: `New inquiry from ${name}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `,
        reply_to: email,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Resend error:', JSON.stringify(data))
      return res.status(500).json({ error: data.message || 'Resend API error', detail: data })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err.message)
    return res.status(500).json({ error: err.message })
  }
}
