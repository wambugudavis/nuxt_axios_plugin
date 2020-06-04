export default ({store, app: {$axios}}) => {
  $axios.defaults.transformRequest = [function (data) {
    data.TOKEN = store.state.app.firebaseToken;
    return JSON.stringify(data);
  }];

  // $axios.defaults.headers.post['Content-Type'] = 'application/json';
