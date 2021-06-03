import { Server } from '@hocuspocus/server'
import { Logger } from '@hocuspocus/extension-logger';
import { Monitor } from '@hocuspocus/extension-monitor'
import { RocksDB } from '@hocuspocus/extension-rocksdb'

const server = Server.configure({
  port: 5000,
  extensions: [
    new Logger(),
    new Monitor(),
    new RocksDB({ path: './database' }),
  ],

  async onConnect(data) {
    await new Promise((resolve, reject) => setTimeout(() => {
      // @ts-ignore
      reject()
      // @ts-ignore
      // resolve()
    }, 1337))
  },
})

server.listen()
