test('sites', () => {
  const sites = require('../data/sites.json')
  const matcher = { method: 'get', page: expect.stringMatching(/^https?:\/\//) }

  sites
    .filter((site) => site.method === 'get' && typeof site.ip === 'string')
    .forEach((site) => expect(site).toEqual({ ...matcher, ip: expect.stringMatching(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/) }))

  sites.filter((site) => site.method === 'get' && typeof site.ip === 'undefined').forEach((site) => expect(site).toEqual(matcher))

  sites.filter((site) => site.method === 'dns').forEach((site) => expect(site).toEqual({ method: 'dns', host: expect.any(String), port: expect.any(Number) }))
})
