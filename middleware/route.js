export default function ({ store, route, ...rest }) {
  const authRoutes = [
    'home',
    'happy-birthday'
  ]
  const { $router } = store
  const { loggedIn } = store.getters
  if (authRoutes.includes(route.name) && !loggedIn) {
    $router.push({ name: 'index' })
  }
}
