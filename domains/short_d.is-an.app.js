addSubDomain({
  description: 'Just a site for college projects, and also a link shortener for my google drive.',
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'short_d', // desired subdomain name
  owner: {
    repo: 'https://github.com/Dragon-Dima/site',
    email: 'dima_77659@mail.ru',
  },
  record: {
    CNAME: 'dragon-dima.github.io'
  },
  proxy: false
})
