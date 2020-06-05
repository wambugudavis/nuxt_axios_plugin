export default function ({ $axios, app, store }) {
  $axios.onError((error) => {
    app.$toast.error(error.response.statusText) //nuxt toast plugin: npm i @nuxtjs/toast
  })

  $axios.onRequest((config) => {
    const authUrlRegex = new RegExp('^/auth/')
    if (!config.url.match(authUrlRegex)) {  //filter routes to modify payload
        config.data.token = store.state.auth.token
    }
  })
}
