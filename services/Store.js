class Store {
  constructor() {
    this.store = new Map()
  }

  /**
   * Recupera todos los datos del almacén
   */
  getStore() {
    let res = []
    this.store.forEach((value, key) => {
      res.push({ key, value })
    })
    return res
  }

  /**
   * Actualiza el almacén entero
   * @param {Map} newStore
   */
  setStore(newStore) {
    let newMap = new Map()
    newStore.forEach(d => {
      newMap.set(d.key, d.value)
    })
    this.store = newMap
  }

  /**
   * Guarda una clave y un valor
   * @param {String} key
   * @param {String} value
   */
  save(key, value) {
    if (
      !/^[a-zA-Z0-9_]{1,50}$/g.test(key) ||
      Buffer.byteLength(value) > 1500000
    )
      throw new Error("Error en formato")
    let res = 0
    if (this.store.has(key)) res = 1
    this.store.set(key, value)
    return res
  }

  /**
   * Recupera un valor mediante una clave
   * @param {String} key
   */
  get(key) {
    const value = this.store.get(key)
    if (value == null) throw new Error("No existe la clave ingresada")
    return value
  }

  /**
   * Borra un valor mediante un clave
   * @param {String} key
   */
  delete(key) {
    if (!this.store.has(key)) throw new Error("No existe la clave ingresada")
    this.store.delete(key)
    return key
  }
}

module.exports = Store
