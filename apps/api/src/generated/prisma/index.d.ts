
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AnalysisCache
 * 
 */
export type AnalysisCache = $Result.DefaultSelection<Prisma.$AnalysisCachePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AnalysisCaches
 * const analysisCaches = await prisma.analysisCache.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AnalysisCaches
   * const analysisCaches = await prisma.analysisCache.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.analysisCache`: Exposes CRUD operations for the **AnalysisCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisCaches
    * const analysisCaches = await prisma.analysisCache.findMany()
    * ```
    */
  get analysisCache(): Prisma.AnalysisCacheDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AnalysisCache: 'AnalysisCache'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "analysisCache"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AnalysisCache: {
        payload: Prisma.$AnalysisCachePayload<ExtArgs>
        fields: Prisma.AnalysisCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload>
          }
          findFirst: {
            args: Prisma.AnalysisCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload>
          }
          findMany: {
            args: Prisma.AnalysisCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload>[]
          }
          create: {
            args: Prisma.AnalysisCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload>
          }
          createMany: {
            args: Prisma.AnalysisCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload>[]
          }
          delete: {
            args: Prisma.AnalysisCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload>
          }
          update: {
            args: Prisma.AnalysisCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload>
          }
          deleteMany: {
            args: Prisma.AnalysisCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload>[]
          }
          upsert: {
            args: Prisma.AnalysisCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisCachePayload>
          }
          aggregate: {
            args: Prisma.AnalysisCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisCache>
          }
          groupBy: {
            args: Prisma.AnalysisCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisCacheCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisCacheCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    analysisCache?: AnalysisCacheOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AnalysisCache
   */

  export type AggregateAnalysisCache = {
    _count: AnalysisCacheCountAggregateOutputType | null
    _min: AnalysisCacheMinAggregateOutputType | null
    _max: AnalysisCacheMaxAggregateOutputType | null
  }

  export type AnalysisCacheMinAggregateOutputType = {
    id: string | null
    inputHash: string | null
    resumeText: string | null
    jobDescText: string | null
    createdAt: Date | null
  }

  export type AnalysisCacheMaxAggregateOutputType = {
    id: string | null
    inputHash: string | null
    resumeText: string | null
    jobDescText: string | null
    createdAt: Date | null
  }

  export type AnalysisCacheCountAggregateOutputType = {
    id: number
    inputHash: number
    resumeText: number
    jobDescText: number
    resultJson: number
    createdAt: number
    _all: number
  }


  export type AnalysisCacheMinAggregateInputType = {
    id?: true
    inputHash?: true
    resumeText?: true
    jobDescText?: true
    createdAt?: true
  }

  export type AnalysisCacheMaxAggregateInputType = {
    id?: true
    inputHash?: true
    resumeText?: true
    jobDescText?: true
    createdAt?: true
  }

  export type AnalysisCacheCountAggregateInputType = {
    id?: true
    inputHash?: true
    resumeText?: true
    jobDescText?: true
    resultJson?: true
    createdAt?: true
    _all?: true
  }

  export type AnalysisCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisCache to aggregate.
     */
    where?: AnalysisCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisCaches to fetch.
     */
    orderBy?: AnalysisCacheOrderByWithRelationInput | AnalysisCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisCaches
    **/
    _count?: true | AnalysisCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisCacheMaxAggregateInputType
  }

  export type GetAnalysisCacheAggregateType<T extends AnalysisCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisCache[P]>
      : GetScalarType<T[P], AggregateAnalysisCache[P]>
  }




  export type AnalysisCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisCacheWhereInput
    orderBy?: AnalysisCacheOrderByWithAggregationInput | AnalysisCacheOrderByWithAggregationInput[]
    by: AnalysisCacheScalarFieldEnum[] | AnalysisCacheScalarFieldEnum
    having?: AnalysisCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisCacheCountAggregateInputType | true
    _min?: AnalysisCacheMinAggregateInputType
    _max?: AnalysisCacheMaxAggregateInputType
  }

  export type AnalysisCacheGroupByOutputType = {
    id: string
    inputHash: string
    resumeText: string
    jobDescText: string
    resultJson: JsonValue
    createdAt: Date
    _count: AnalysisCacheCountAggregateOutputType | null
    _min: AnalysisCacheMinAggregateOutputType | null
    _max: AnalysisCacheMaxAggregateOutputType | null
  }

  type GetAnalysisCacheGroupByPayload<T extends AnalysisCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisCacheGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisCacheGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputHash?: boolean
    resumeText?: boolean
    jobDescText?: boolean
    resultJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analysisCache"]>

  export type AnalysisCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputHash?: boolean
    resumeText?: boolean
    jobDescText?: boolean
    resultJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analysisCache"]>

  export type AnalysisCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inputHash?: boolean
    resumeText?: boolean
    jobDescText?: boolean
    resultJson?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["analysisCache"]>

  export type AnalysisCacheSelectScalar = {
    id?: boolean
    inputHash?: boolean
    resumeText?: boolean
    jobDescText?: boolean
    resultJson?: boolean
    createdAt?: boolean
  }

  export type AnalysisCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inputHash" | "resumeText" | "jobDescText" | "resultJson" | "createdAt", ExtArgs["result"]["analysisCache"]>

  export type $AnalysisCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisCache"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inputHash: string
      resumeText: string
      jobDescText: string
      resultJson: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["analysisCache"]>
    composites: {}
  }

  type AnalysisCacheGetPayload<S extends boolean | null | undefined | AnalysisCacheDefaultArgs> = $Result.GetResult<Prisma.$AnalysisCachePayload, S>

  type AnalysisCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisCacheCountAggregateInputType | true
    }

  export interface AnalysisCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisCache'], meta: { name: 'AnalysisCache' } }
    /**
     * Find zero or one AnalysisCache that matches the filter.
     * @param {AnalysisCacheFindUniqueArgs} args - Arguments to find a AnalysisCache
     * @example
     * // Get one AnalysisCache
     * const analysisCache = await prisma.analysisCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisCacheFindUniqueArgs>(args: SelectSubset<T, AnalysisCacheFindUniqueArgs<ExtArgs>>): Prisma__AnalysisCacheClient<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisCacheFindUniqueOrThrowArgs} args - Arguments to find a AnalysisCache
     * @example
     * // Get one AnalysisCache
     * const analysisCache = await prisma.analysisCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisCacheClient<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCacheFindFirstArgs} args - Arguments to find a AnalysisCache
     * @example
     * // Get one AnalysisCache
     * const analysisCache = await prisma.analysisCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisCacheFindFirstArgs>(args?: SelectSubset<T, AnalysisCacheFindFirstArgs<ExtArgs>>): Prisma__AnalysisCacheClient<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCacheFindFirstOrThrowArgs} args - Arguments to find a AnalysisCache
     * @example
     * // Get one AnalysisCache
     * const analysisCache = await prisma.analysisCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisCacheClient<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisCaches
     * const analysisCaches = await prisma.analysisCache.findMany()
     * 
     * // Get first 10 AnalysisCaches
     * const analysisCaches = await prisma.analysisCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisCacheWithIdOnly = await prisma.analysisCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisCacheFindManyArgs>(args?: SelectSubset<T, AnalysisCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisCache.
     * @param {AnalysisCacheCreateArgs} args - Arguments to create a AnalysisCache.
     * @example
     * // Create one AnalysisCache
     * const AnalysisCache = await prisma.analysisCache.create({
     *   data: {
     *     // ... data to create a AnalysisCache
     *   }
     * })
     * 
     */
    create<T extends AnalysisCacheCreateArgs>(args: SelectSubset<T, AnalysisCacheCreateArgs<ExtArgs>>): Prisma__AnalysisCacheClient<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisCaches.
     * @param {AnalysisCacheCreateManyArgs} args - Arguments to create many AnalysisCaches.
     * @example
     * // Create many AnalysisCaches
     * const analysisCache = await prisma.analysisCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisCacheCreateManyArgs>(args?: SelectSubset<T, AnalysisCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisCaches and returns the data saved in the database.
     * @param {AnalysisCacheCreateManyAndReturnArgs} args - Arguments to create many AnalysisCaches.
     * @example
     * // Create many AnalysisCaches
     * const analysisCache = await prisma.analysisCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisCaches and only return the `id`
     * const analysisCacheWithIdOnly = await prisma.analysisCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisCache.
     * @param {AnalysisCacheDeleteArgs} args - Arguments to delete one AnalysisCache.
     * @example
     * // Delete one AnalysisCache
     * const AnalysisCache = await prisma.analysisCache.delete({
     *   where: {
     *     // ... filter to delete one AnalysisCache
     *   }
     * })
     * 
     */
    delete<T extends AnalysisCacheDeleteArgs>(args: SelectSubset<T, AnalysisCacheDeleteArgs<ExtArgs>>): Prisma__AnalysisCacheClient<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisCache.
     * @param {AnalysisCacheUpdateArgs} args - Arguments to update one AnalysisCache.
     * @example
     * // Update one AnalysisCache
     * const analysisCache = await prisma.analysisCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisCacheUpdateArgs>(args: SelectSubset<T, AnalysisCacheUpdateArgs<ExtArgs>>): Prisma__AnalysisCacheClient<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisCaches.
     * @param {AnalysisCacheDeleteManyArgs} args - Arguments to filter AnalysisCaches to delete.
     * @example
     * // Delete a few AnalysisCaches
     * const { count } = await prisma.analysisCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisCacheDeleteManyArgs>(args?: SelectSubset<T, AnalysisCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisCaches
     * const analysisCache = await prisma.analysisCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisCacheUpdateManyArgs>(args: SelectSubset<T, AnalysisCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisCaches and returns the data updated in the database.
     * @param {AnalysisCacheUpdateManyAndReturnArgs} args - Arguments to update many AnalysisCaches.
     * @example
     * // Update many AnalysisCaches
     * const analysisCache = await prisma.analysisCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisCaches and only return the `id`
     * const analysisCacheWithIdOnly = await prisma.analysisCache.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisCache.
     * @param {AnalysisCacheUpsertArgs} args - Arguments to update or create a AnalysisCache.
     * @example
     * // Update or create a AnalysisCache
     * const analysisCache = await prisma.analysisCache.upsert({
     *   create: {
     *     // ... data to create a AnalysisCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisCache we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisCacheUpsertArgs>(args: SelectSubset<T, AnalysisCacheUpsertArgs<ExtArgs>>): Prisma__AnalysisCacheClient<$Result.GetResult<Prisma.$AnalysisCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCacheCountArgs} args - Arguments to filter AnalysisCaches to count.
     * @example
     * // Count the number of AnalysisCaches
     * const count = await prisma.analysisCache.count({
     *   where: {
     *     // ... the filter for the AnalysisCaches we want to count
     *   }
     * })
    **/
    count<T extends AnalysisCacheCountArgs>(
      args?: Subset<T, AnalysisCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalysisCacheAggregateArgs>(args: Subset<T, AnalysisCacheAggregateArgs>): Prisma.PrismaPromise<GetAnalysisCacheAggregateType<T>>

    /**
     * Group by AnalysisCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalysisCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisCacheGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisCacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalysisCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisCache model
   */
  readonly fields: AnalysisCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalysisCache model
   */
  interface AnalysisCacheFieldRefs {
    readonly id: FieldRef<"AnalysisCache", 'String'>
    readonly inputHash: FieldRef<"AnalysisCache", 'String'>
    readonly resumeText: FieldRef<"AnalysisCache", 'String'>
    readonly jobDescText: FieldRef<"AnalysisCache", 'String'>
    readonly resultJson: FieldRef<"AnalysisCache", 'Json'>
    readonly createdAt: FieldRef<"AnalysisCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisCache findUnique
   */
  export type AnalysisCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisCache to fetch.
     */
    where: AnalysisCacheWhereUniqueInput
  }

  /**
   * AnalysisCache findUniqueOrThrow
   */
  export type AnalysisCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisCache to fetch.
     */
    where: AnalysisCacheWhereUniqueInput
  }

  /**
   * AnalysisCache findFirst
   */
  export type AnalysisCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisCache to fetch.
     */
    where?: AnalysisCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisCaches to fetch.
     */
    orderBy?: AnalysisCacheOrderByWithRelationInput | AnalysisCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisCaches.
     */
    cursor?: AnalysisCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisCaches.
     */
    distinct?: AnalysisCacheScalarFieldEnum | AnalysisCacheScalarFieldEnum[]
  }

  /**
   * AnalysisCache findFirstOrThrow
   */
  export type AnalysisCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisCache to fetch.
     */
    where?: AnalysisCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisCaches to fetch.
     */
    orderBy?: AnalysisCacheOrderByWithRelationInput | AnalysisCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisCaches.
     */
    cursor?: AnalysisCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisCaches.
     */
    distinct?: AnalysisCacheScalarFieldEnum | AnalysisCacheScalarFieldEnum[]
  }

  /**
   * AnalysisCache findMany
   */
  export type AnalysisCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * Filter, which AnalysisCaches to fetch.
     */
    where?: AnalysisCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisCaches to fetch.
     */
    orderBy?: AnalysisCacheOrderByWithRelationInput | AnalysisCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisCaches.
     */
    cursor?: AnalysisCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisCaches.
     */
    skip?: number
    distinct?: AnalysisCacheScalarFieldEnum | AnalysisCacheScalarFieldEnum[]
  }

  /**
   * AnalysisCache create
   */
  export type AnalysisCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * The data needed to create a AnalysisCache.
     */
    data: XOR<AnalysisCacheCreateInput, AnalysisCacheUncheckedCreateInput>
  }

  /**
   * AnalysisCache createMany
   */
  export type AnalysisCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisCaches.
     */
    data: AnalysisCacheCreateManyInput | AnalysisCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisCache createManyAndReturn
   */
  export type AnalysisCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisCaches.
     */
    data: AnalysisCacheCreateManyInput | AnalysisCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisCache update
   */
  export type AnalysisCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * The data needed to update a AnalysisCache.
     */
    data: XOR<AnalysisCacheUpdateInput, AnalysisCacheUncheckedUpdateInput>
    /**
     * Choose, which AnalysisCache to update.
     */
    where: AnalysisCacheWhereUniqueInput
  }

  /**
   * AnalysisCache updateMany
   */
  export type AnalysisCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisCaches.
     */
    data: XOR<AnalysisCacheUpdateManyMutationInput, AnalysisCacheUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisCaches to update
     */
    where?: AnalysisCacheWhereInput
    /**
     * Limit how many AnalysisCaches to update.
     */
    limit?: number
  }

  /**
   * AnalysisCache updateManyAndReturn
   */
  export type AnalysisCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisCaches.
     */
    data: XOR<AnalysisCacheUpdateManyMutationInput, AnalysisCacheUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisCaches to update
     */
    where?: AnalysisCacheWhereInput
    /**
     * Limit how many AnalysisCaches to update.
     */
    limit?: number
  }

  /**
   * AnalysisCache upsert
   */
  export type AnalysisCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * The filter to search for the AnalysisCache to update in case it exists.
     */
    where: AnalysisCacheWhereUniqueInput
    /**
     * In case the AnalysisCache found by the `where` argument doesn't exist, create a new AnalysisCache with this data.
     */
    create: XOR<AnalysisCacheCreateInput, AnalysisCacheUncheckedCreateInput>
    /**
     * In case the AnalysisCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisCacheUpdateInput, AnalysisCacheUncheckedUpdateInput>
  }

  /**
   * AnalysisCache delete
   */
  export type AnalysisCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
    /**
     * Filter which AnalysisCache to delete.
     */
    where: AnalysisCacheWhereUniqueInput
  }

  /**
   * AnalysisCache deleteMany
   */
  export type AnalysisCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisCaches to delete
     */
    where?: AnalysisCacheWhereInput
    /**
     * Limit how many AnalysisCaches to delete.
     */
    limit?: number
  }

  /**
   * AnalysisCache without action
   */
  export type AnalysisCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisCache
     */
    select?: AnalysisCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisCache
     */
    omit?: AnalysisCacheOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AnalysisCacheScalarFieldEnum: {
    id: 'id',
    inputHash: 'inputHash',
    resumeText: 'resumeText',
    jobDescText: 'jobDescText',
    resultJson: 'resultJson',
    createdAt: 'createdAt'
  };

  export type AnalysisCacheScalarFieldEnum = (typeof AnalysisCacheScalarFieldEnum)[keyof typeof AnalysisCacheScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AnalysisCacheWhereInput = {
    AND?: AnalysisCacheWhereInput | AnalysisCacheWhereInput[]
    OR?: AnalysisCacheWhereInput[]
    NOT?: AnalysisCacheWhereInput | AnalysisCacheWhereInput[]
    id?: StringFilter<"AnalysisCache"> | string
    inputHash?: StringFilter<"AnalysisCache"> | string
    resumeText?: StringFilter<"AnalysisCache"> | string
    jobDescText?: StringFilter<"AnalysisCache"> | string
    resultJson?: JsonFilter<"AnalysisCache">
    createdAt?: DateTimeFilter<"AnalysisCache"> | Date | string
  }

  export type AnalysisCacheOrderByWithRelationInput = {
    id?: SortOrder
    inputHash?: SortOrder
    resumeText?: SortOrder
    jobDescText?: SortOrder
    resultJson?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inputHash?: string
    AND?: AnalysisCacheWhereInput | AnalysisCacheWhereInput[]
    OR?: AnalysisCacheWhereInput[]
    NOT?: AnalysisCacheWhereInput | AnalysisCacheWhereInput[]
    resumeText?: StringFilter<"AnalysisCache"> | string
    jobDescText?: StringFilter<"AnalysisCache"> | string
    resultJson?: JsonFilter<"AnalysisCache">
    createdAt?: DateTimeFilter<"AnalysisCache"> | Date | string
  }, "id" | "inputHash">

  export type AnalysisCacheOrderByWithAggregationInput = {
    id?: SortOrder
    inputHash?: SortOrder
    resumeText?: SortOrder
    jobDescText?: SortOrder
    resultJson?: SortOrder
    createdAt?: SortOrder
    _count?: AnalysisCacheCountOrderByAggregateInput
    _max?: AnalysisCacheMaxOrderByAggregateInput
    _min?: AnalysisCacheMinOrderByAggregateInput
  }

  export type AnalysisCacheScalarWhereWithAggregatesInput = {
    AND?: AnalysisCacheScalarWhereWithAggregatesInput | AnalysisCacheScalarWhereWithAggregatesInput[]
    OR?: AnalysisCacheScalarWhereWithAggregatesInput[]
    NOT?: AnalysisCacheScalarWhereWithAggregatesInput | AnalysisCacheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisCache"> | string
    inputHash?: StringWithAggregatesFilter<"AnalysisCache"> | string
    resumeText?: StringWithAggregatesFilter<"AnalysisCache"> | string
    jobDescText?: StringWithAggregatesFilter<"AnalysisCache"> | string
    resultJson?: JsonWithAggregatesFilter<"AnalysisCache">
    createdAt?: DateTimeWithAggregatesFilter<"AnalysisCache"> | Date | string
  }

  export type AnalysisCacheCreateInput = {
    id?: string
    inputHash: string
    resumeText: string
    jobDescText: string
    resultJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisCacheUncheckedCreateInput = {
    id?: string
    inputHash: string
    resumeText: string
    jobDescText: string
    resultJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    resumeText?: StringFieldUpdateOperationsInput | string
    jobDescText?: StringFieldUpdateOperationsInput | string
    resultJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    resumeText?: StringFieldUpdateOperationsInput | string
    jobDescText?: StringFieldUpdateOperationsInput | string
    resultJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCacheCreateManyInput = {
    id?: string
    inputHash: string
    resumeText: string
    jobDescText: string
    resultJson: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    resumeText?: StringFieldUpdateOperationsInput | string
    jobDescText?: StringFieldUpdateOperationsInput | string
    resultJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    resumeText?: StringFieldUpdateOperationsInput | string
    jobDescText?: StringFieldUpdateOperationsInput | string
    resultJson?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnalysisCacheCountOrderByAggregateInput = {
    id?: SortOrder
    inputHash?: SortOrder
    resumeText?: SortOrder
    jobDescText?: SortOrder
    resultJson?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    inputHash?: SortOrder
    resumeText?: SortOrder
    jobDescText?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisCacheMinOrderByAggregateInput = {
    id?: SortOrder
    inputHash?: SortOrder
    resumeText?: SortOrder
    jobDescText?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}