export default async function handler(req, res) {
  // Allow CORS dari semua origin (atau ganti * dengan domain spesifik)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Ambil endpoint dari query: ?path=transactioncreate/qris
  const { path } = req.query;
  if (!path) return res.status(400).json({ error: 'path required' });

  const targetUrl = `https://app.pakasir.com/api/${path}`;

  try {
    const fetchOptions = {
      method: req.method,
      headers: { 'Content-Type': 'application/json' },
    };

    if (req.method === 'POST') {
      fetchOptions.body = JSON.stringify(req.body);
    }

    const upstream = await fetch(targetUrl + (req.method === 'GET' ? '?' + new URLSearchParams(req.query).toString().replace('path=' + encodeURIComponent(path) + '&', '') : ''), fetchOptions);

    const data = await upstream.json();
    return res.status(upstream.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Proxy error', detail: err.message });
  }
}
