export default function ({ store, route, ...rest }) {
  const authRoutes = [
    'home'
  ]
  const { $router } = store
  const { loggedIn } = store.getters
  if (authRoutes.includes(route.name) && !loggedIn) {
    $router.push({ name: 'index' })
  }
}
