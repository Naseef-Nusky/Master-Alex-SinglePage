function getContactApiUrl() {
  const configured = (import.meta.env.VITE_CONTACT_API_URL || '').trim()

  // Same on all sites: nginx proxies /api/contact on the same domain
  if (!configured || /api\.masteralex\.co\.uk/i.test(configured)) {
    return '/api/contact'
  }

  try {
    const url = new URL(configured, window.location.origin)
    if (url.origin === window.location.origin) {
      return url.pathname
    }
    return configured
  } catch {
    return '/api/contact'
  }
}

export async function submitContact(payload) {
  let response

  try {
    response = await fetch(getContactApiUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error('Unable to reach the server. Please try again or call us directly.')
  }

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send message. Please try again.')
  }

  return data
}
