test('sites', () => {
  const sites = require('../data/sites.json')
  const matcher = { method: 'get', page: expect.stringMatching(/^https?:\/\//) }

  sites
    .filter((x) => x.method === 'get' && typeof x.ip === 'string')
    .forEach((x) => expect(x).toEqual({ ...matcher, ip: expect.stringMatching(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/) }))

  sites.filter((x) => x.method === 'get' && typeof x.ip === 'undefined' && typeof x.useBrowser === 'undefined').forEach((x) => expect(x).toEqual(matcher))
  sites
    .filter((x) => x.method === 'get' && typeof x.ip === 'undefined' && typeof x.useBrowser === 'boolean')
    .forEach((x) => expect(x).toEqual({ ...matcher, useBrowser: expect.any(Boolean) }))

  sites
    .filter((x) => x.method === 'dns' && typeof x.targets === 'undefined')
    .forEach((x) => expect(x).toEqual({ method: 'dns', host: expect.any(String), port: expect.any(Number) }))

  sites
    .filter((x) => x.method === 'dns' && typeof x.targets !== 'undefined')
    .forEach((x) => {
      expect(x).toEqual({ method: 'dns', host: expect.any(String), port: expect.any(Number), targets: expect.any(Array) })
      x.targets.forEach((t) => expect(typeof t).toEqual('string'))
    })
})
