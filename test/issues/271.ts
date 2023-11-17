import typia from "typia";

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

type StringPathLeavesOf<O, F = "^%#&$!@", D extends number = 4> = [D] extends [
  never,
]
  ? never
  : O extends object
  ? {
      [K in keyof O]-?: O[K] extends F
        ? never
        : Join<K, StringPathLeavesOf<O[K], F, Prev[D]>>;
    }[keyof O]
  : "";

type TypeOfPath<
  Schema extends { [k: string]: any },
  S extends string,
  D extends number = 4,
> = [D] extends [never]
  ? never
  : S extends `${infer T}.${infer U}`
  ? TypeOfPath<Schema[T], U, Prev[D]>
  : Schema[S];

const FILTER_OPERATION_MAPPING_STRING_TO_STRING = {
  like: 2,
  notLike: 3,
  substring: 4,
  startsWith: 5,
  endsWith: 6,
};
const FILTER_CONDITION_MAPPING = {
  or: 2,
  and: 3,
  not: 4,
};

type ValueType =
  | "stringToString"
  | "stringToNumber"
  | "stringOrNumber"
  | "numberArray"
  | "array";
type PathType<
  TableSchema extends { [k: string]: any } | undefined,
  Type extends ValueType,
  Columns extends
    | Array<
        TableSchema extends undefined ? string : StringPathLeavesOf<TableSchema>
      >
    | undefined = undefined,
  ColumnsExclude extends
    | Array<
        TableSchema extends undefined ? string : StringPathLeavesOf<TableSchema>
      >
    | undefined = undefined,
> = Exclude<
  Columns extends any[]
    ? Columns extends Array<infer T>
      ? T
      : never
    : Type extends "stringToString"
    ? StringPathLeavesOf<TableSchema, number | boolean>
    : Type extends "stringToNumber"
    ? StringPathLeavesOf<TableSchema, string | boolean>
    : StringPathLeavesOf<TableSchema>,
  ColumnsExclude extends Array<infer T> ? T : undefined
>;

type FilterBy<
  Operations extends { [k: string]: any },
  Type extends ValueType,
  TableSchema extends { [k: string]: any } | undefined = undefined,
  Columns extends
    | Array<
        TableSchema extends undefined ? string : StringPathLeavesOf<TableSchema>
      >
    | undefined = undefined,
  ColumnsExclude extends
    | Array<
        TableSchema extends undefined ? string : StringPathLeavesOf<TableSchema>
      >
    | undefined = undefined,
  Path extends PathType<TableSchema, Type, Columns, ColumnsExclude> = PathType<
    TableSchema,
    Type,
    Columns,
    ColumnsExclude
  >,
> = TableSchema extends undefined
  ? {
      operation: keyof Operations;
      column: Columns extends any[]
        ? Columns extends Array<infer T>
          ? T
          : never
        : string;
      value: Type extends "numberArray"
        ? [string | number, string | number]
        : Type extends "array"
        ? Array<string | number>
        : Type extends "stringToString"
        ? string
        : Type extends "stringToNumber"
        ? string
        : string | number;
    }
  : {
      [key in Path]: {
        operation: keyof Operations;
        column: Columns extends any[]
          ? Columns extends Array<infer T>
            ? T
            : never
          : key;
        value: Type extends "numberArray"
          ? [
              TypeOfPath<Exclude<TableSchema, undefined>, key>,
              TypeOfPath<Exclude<TableSchema, undefined>, key>,
            ]
          : Type extends "stringToString"
          ? string
          : Type extends "stringToNumber"
          ? string
          : Type extends "array"
          ? Array<TypeOfPath<Exclude<TableSchema, undefined>, key>>
          : TypeOfPath<Exclude<TableSchema, undefined>, key>;
      };
    }[Path];

type Filter<
  TableSchema extends { [k: string]: any } | undefined = undefined,
  Columns extends
    | Array<
        TableSchema extends undefined ? string : StringPathLeavesOf<TableSchema>
      >
    | undefined = undefined,
  ColumnsExclude extends
    | Array<
        TableSchema extends undefined ? string : StringPathLeavesOf<TableSchema>
      >
    | undefined = undefined,
  D extends number = 4,
> = [D] extends [never]
  ? never
  :
      | FilterBy<
          typeof FILTER_OPERATION_MAPPING_STRING_TO_STRING,
          "stringToString",
          TableSchema,
          Columns,
          ColumnsExclude
        >
      | {
          [k in keyof typeof FILTER_CONDITION_MAPPING]?: Filter<
            TableSchema,
            Columns,
            ColumnsExclude,
            Prev[D]
          >;
        };

type Test555 = Filter<{
  aa: number;
  bb: { xx: number; yy: string };
  cc: string;
}>;
const value: Test555 = {
  or: { operation: "like", column: "bb.yy_bad" as "bb.yy", value: "abc" },
};

const is = typia.createIs<Test555>();
console.log(is(value));
