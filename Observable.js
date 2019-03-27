/*
 * @Author: kael
 * @Date: 2018-02-01 17:41:25
 * @Last Modified by: Kaiser
 * @Last Modified time: 2019-03-27 21:13:20
 */

class ObserverList {
  constructor() {
    this.observerList = []
  }
  add(observer) {
    // todo add observer to list
    this.observerList.push(observer)
  }
  remove(observer) {
    // todo remove observer from list
    const index = this.observerList.indexOf(observer)
    if (index === -1) return
    this.observerList.splice(index, 1)
  }
  count() {
    // return observer list size
    return this.observerList.length
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList()
  }
  addObserver(observer) {
    // todo add observer
    this.observers.add(observer)
  }
  removeObserver(observer) {
    // todo remove observer
    this.observers.remove(observer)
  }
  notify(...args) {
    // todo notify
    this.observers.observerList.forEach(observer => observer.update(...args))
  }
}

module.exports = { Subject }
