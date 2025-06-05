import { init } from '@module-federation/enhanced/runtime'

init({
  name: 'host',
  remotes: [
    {
      name: 'remote',
      entry: 'http://localhost:2000/mf-manifest.json',
    },
  ],
})
