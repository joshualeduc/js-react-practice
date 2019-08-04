let count = 0
export default {
  __setCount (_count) {
    count = _count
  },
  async GetNotifications() {
    console.warn('Good job, using mock')
    return { count }
  }
}
