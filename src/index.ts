import { Analytics } from '@segment/analytics-node'

const analytics = new Analytics({
  writeKey: 'DjTUVRhleGaZX31JQpj6XIAaprCIb25W',
  maxEventsInBatch: 1,
}).on('error', console.error)

import type { Plugin } from '@segment/analytics-node'

export const lowercase: Plugin = {
  name: 'Lowercase events',
  type: 'enrichment',
  version: '1.0.0',
  isLoaded: () => true,
  load: () => Promise.resolve(),
  track: (ctx) => {
    ctx.event.event = ctx.event.event?.toLowerCase()
    return ctx
  },
}

analytics.register(lowercase)

analytics.track({userId: "foo", event: "bar"})

console.log("Test!")
