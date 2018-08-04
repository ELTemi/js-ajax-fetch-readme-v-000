const token = 'e7b137724da7b6595f8f0d55d409799073d5531b'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
