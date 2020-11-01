interface Route {
  path: String;
  name: String;
}

const Home: Route = {
  path: '/home',
  name: 'home'
}

const Enigm: Route = {
  path: '/enigm',
  name: 'enigm'
}

export { Home, Enigm }