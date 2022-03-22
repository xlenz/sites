test('sites', () => {
  const sites = require('../data/sites.json')
  sites.forEach((site) => expect(site).toEqual({ page: expect.stringMatching(/^https?:\/\//) }))
})
