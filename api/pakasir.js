export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const { path, ...rest } = req.query;
  if (!path) return res.status(400).json({ error: 'path required' });

  let targetUrl = `https://app.pakasir.com/api/${path}`;

  // Untuk GET: teruskan semua query params (kecuali 'path')
  if (req.method === 'GET' && Object.keys(rest).length > 0) {
    targetUrl += '?' + new URLSearchParams(rest).toString();
  }

  try {
    const opts = {
      method: req.method,
      headers: { 'Content-Type': 'application/json' },
    };

    if (req.method === 'POST') {
      opts.body = JSON.stringify(req.body);
    }

    const upstream = await fetch(targetUrl, opts);
    const text = await upstream.text();

    let data;
    try { data = JSON.parse(text); }
    catch(e) { data = { raw: text }; }

    return res.status(upstream.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Proxy error', detail: err.message });
  }
}
