export default (ctx, inject) => {
  const $content = function () {
    const path = Array.from(arguments).join('/').replace(/\/+/g, '/')

    return ctx.req.database.query(`/${path}`)
  }

  inject('content', $content)
  ctx.$content = $content
}