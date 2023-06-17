// For more information, see https://crawlee.dev/
import { PuppeteerCrawler, log } from 'crawlee'
import { router } from './routes.js'
import { SHOPEE_CATEGORY } from 'constant.js'

const startUrls = [SHOPEE_CATEGORY.HEALTH]

const crawler = new PuppeteerCrawler({
  // proxyConfiguration: new ProxyConfiguration({ proxyUrls: ['...'] }),
  requestHandler: router,
})

await crawler.run(startUrls)
