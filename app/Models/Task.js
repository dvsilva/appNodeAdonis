'use strict'

const Model = use('Model')

class Task extends Model {
  static boot () {
    super.boot()

    this.addHook('afterCreate', 'TaskHook.sendNewTaskEmail')
    this.addHook('beforeUpdate', 'TaskHook.sendNewTaskEmail')
  }

  project () {
    return this.belongsTo('App/Models/Project')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Task
