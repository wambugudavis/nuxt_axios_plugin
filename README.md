# Nuxt axios plugin

A nuxt axios plugin that uses [interceptors](https://axios.nuxtjs.org/helpers.html#interceptors) each request to: append constant paramaters; display error toast messages

```
export default function ({ $axios, app, store }) {
  $axios.onError((error) => {
    app.$toast.error(error.response.statusText)
  })

  $axios.onRequest((config) => {
    const authUrlRegex = new RegExp('^/auth/')
    if (!config.url.match(authUrlRegex)) {  //filter routes to modify payload
        config.data.token = store.state.auth.token
    }
  })
}
  
```

## Built With

* [Toast](https://github.com/nuxt-community/modules/tree/master/packages/toast) - Plugin to render toast messages
