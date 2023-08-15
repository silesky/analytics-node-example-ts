import { Analytics } from '@segment/analytics-node'
import type { Plugin } from '@segment/analytics-node'

if (!process.env.WRITEKEY) {
  throw new Error('Missing WRITEKEY environment variable. Check the REAMDE for more information.')
}

const analytics = new Analytics({
  writeKey: process.env.WRITEKEY!,
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
