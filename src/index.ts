import { Analytics } from '@segment/analytics-node'
import type { Plugin } from '@segment/analytics-node'

const analytics = new Analytics({
  writeKey: 'DjTUVRhleGaZX31JQpj6XIAaprCIb25W',
  maxEventsInBatch: 1,
})
analytics.on('error', console.error)
analytics.on('http_request', (req) => console.log('http request', req))


export const ExamplePlugin: Plugin = {
  name: 'Lowercase events',
  type: 'enrichment',
  version: '0.0.0',
  isLoaded: () => true,
  load: () => Promise.resolve(),
  track: (ctx) => {
    ctx.event.event = ctx.event.event?.toLowerCase()
    return ctx
  },
}

analytics.register(ExamplePlugin)

analytics.track({userId: "foo", event: "bar"})

console.log("Test!")
