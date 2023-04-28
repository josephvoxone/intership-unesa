import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'daily_reports'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.dateTime('date').notNullable()
      table.string('reason', 255).notNullable()
      table.integer('id_kandang', 255).notNullable()
      table.integer('depletion', 255).notNullable()
      table.decimal('feed_intake', 255).notNullable()
      table.decimal('avg_bw', 255).notNullable()
      table.integer('created_by', 255).notNullable()
      table.integer('updated_by', 255).notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.dateTime('deleted_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
