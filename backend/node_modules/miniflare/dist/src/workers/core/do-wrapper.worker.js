// src/plugins/core/constants.ts
var CORE_PLUGIN_NAME = "core", SERVICE_ENTRY = `${CORE_PLUGIN_NAME}:entry`, SERVICE_LOCAL_EXPLORER = `${CORE_PLUGIN_NAME}:local-explorer`, LOCAL_EXPLORER_DISK = `${CORE_PLUGIN_NAME}:local-explorer-disk`, SERVICE_USER_PREFIX = `${CORE_PLUGIN_NAME}:user`, SERVICE_BUILTIN_PREFIX = `${CORE_PLUGIN_NAME}:builtin`, SERVICE_CUSTOM_FETCH_PREFIX = `${CORE_PLUGIN_NAME}:custom-fetch`, SERVICE_CUSTOM_NODE_PREFIX = `${CORE_PLUGIN_NAME}:custom-node`;
var INTROSPECT_SQLITE_METHOD = "__miniflare_introspectSqlite", GET_DO_NAME_METHOD = "__miniflare_getDOName";

// src/workers/core/do-wrapper.worker.ts
function createDurableObjectWrapper(UserClass) {
  class Wrapper extends UserClass {
    constructor(ctx, env) {
      super(ctx, env), ctx.id.name !== void 0 && ctx.blockConcurrencyWhile(async () => {
        let sql = ctx.storage.sql;
        sql && (sql.exec(
          "CREATE TABLE IF NOT EXISTS __miniflare_do_name (id INTEGER PRIMARY KEY, name TEXT)"
        ), sql.exec(
          "INSERT OR REPLACE INTO __miniflare_do_name (id, name) VALUES (1, ?)",
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- guarded by outer if
          ctx.id.name
        ));
      });
    }
    /**
     * Returns the DO instance name from ctx.id.name if available:
     */
    [GET_DO_NAME_METHOD]() {
      if (this.ctx.id.name !== void 0)
        return this.ctx.id.name;
      let sql = this.ctx.storage.sql;
      if (sql)
        try {
          let row = sql.exec("SELECT name FROM __miniflare_do_name WHERE id = 1").one();
          if (typeof row?.name == "string")
            return row.name;
        } catch {
        }
    }
    /**
     * Execute SQL queries against the DO's SQLite storage.
     * If multiple queries are provided, they run in a transaction.
     */
    [INTROSPECT_SQLITE_METHOD](queries) {
      let sql = this.ctx.storage.sql;
      if (!sql)
        throw new Error(
          "This Durable Object does not have SQLite storage enabled"
        );
      let executeQuery = (query) => {
        let cursor = sql.exec(query.sql, ...query.params ?? []);
        return {
          columns: cursor.columnNames,
          rows: Array.from(cursor.raw()),
          meta: {
            rows_read: cursor.rowsRead,
            rows_written: cursor.rowsWritten
          }
        };
      }, results = [];
      return queries.length > 1 ? this.ctx.storage.transactionSync(() => {
        for (let query of queries)
          results.push(executeQuery(query));
      }) : results.push(executeQuery(queries[0])), results;
    }
  }
  return Object.defineProperty(Wrapper, "name", { value: UserClass.name }), Wrapper;
}
export {
  createDurableObjectWrapper
};
//# sourceMappingURL=do-wrapper.worker.js.map
