import { delay } from 'redux-saga'
export default {
  async GetNotifications() {
    console.warn('Real Notification Service! Really Contacting APIS, I promise!')
    await(1000)
    return { count: 42 };
  }
}
