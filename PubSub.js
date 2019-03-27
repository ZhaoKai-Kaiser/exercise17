/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: Kaiser
 * @Last Modified time: 2019-03-27 21:16:09
 */

module.exports = class PubSub {
  constructor() {
    this.subscribers = {}
  }

  subscribe(type, fn) {
    // todo subscribe
    this.subscribers[type] = fn
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    this.subscribers[type] = undefined
  }

  publish(type, ...args) {
    // todo publish
    this.subscribers[type] && this.subscribers[type](...args)
  }
}
