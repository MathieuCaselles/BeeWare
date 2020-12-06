interface Route {
  path: String;
  name: String;
}

const Home: Route = {
  path: '/home',
  name: 'home'
}

const Riddle: Route = {
  path: '/riddle',
  name: 'riddle'
}

const RiddleGPS: Route = {
  path: '/riddle/gps',
  name: 'treasure-hunt'
}

export { Home, Riddle }
