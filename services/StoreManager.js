const hash = require("object-hash")
class StoreManager {
  constructor() {
    const q_partitions = process.env.QUANTITY_PARTITIONS
    this.range = parseInt(16777215 / q_partitions) // rango individual para cada partición
    this.partitions = []
    let from = 0
    for (let index = 0; index < q_partitions; index++) {
      this.partitions.push({
        id: index + 1,
        from,
        to: from + this.range - 1,
      })
      from += this.range
    }
    this.partitions[q_partitions - 1].to += (16777215 % q_partitions) + 1 // Para cubrir bien el rango de hashes posibles
  }

  /**
   * Particionamiento por clave-valor hash MD5
   * @param {String} key
   */
  hash(key) {
    let h = hash.MD5(key) // Devuelve un string de 32bytes
    h = h.slice(0, 6) // Tomamos los 6 primeros bytes del hash
    return parseInt(h, 16) // Regresamos el valor decimal
  }

  /**
   * Mapea un clave a una partición
   * @param {String} key
   */
  map(key) {
    const hash = this.hash(key)
    return this.partitions.find(e => e.from <= hash && hash <= e.to).id
  }

  balancing() {
    let quantity_partitions_x_node
    const partitions = this.partitions.sort()
    let resto
    let nodes //ordenar de mayor cantidad de particiones a menor
    nodes.forEach(element => {
      if (nodes.partitions != quantity_partitions_x_node) {
        let diff = node.partitions - quantity_partitions_x_node
        node.partitions = diff
        newNode.partitions += diff
      }
    })
  }

  /**
   * Agrega un nodo al cluster
   * @param {String} ip
   * @param {Number} port
   */
  addNode(ip, port) {}

  /**
   * Elimina un nodo del cluster
   * @param {String} ip
   * @param {Number} port
   */
  deleteNode(ip, port) {}
}

module.exports = StoreManager
