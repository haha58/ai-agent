import { Hono } from 'hono'

// 注意，这里只是案例代码，实际项目中可能需要更复杂的绑定类型，这里只是为了示例
interface Env {
  DB: D1Database
}

const app = new Hono<{ Bindings: Env }>()

app.get('/health', async (c) => {
  const result = await c.env.DB.prepare('SELECT 1 as ok').first<{ ok: number }>()
  return c.json(result)
})

export default app