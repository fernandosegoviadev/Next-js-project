// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// https://www.youtube.com/watch?v=SiUM8vYeuu0&ab_channel=FaztCode
// Cómo trabajar con Next JS

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })

  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
