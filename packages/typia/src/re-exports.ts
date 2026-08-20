// Every type a public `typia.*` signature exposes must be re-exported here.
//
// A consumer compiling with `declaration: true` may only name an inferred type
// through a module specifier it can resolve itself, and typia's dependencies
// are not among them under an isolated `node_modules` layout such as pnpm's:
// they sit beside typia, not above the consumer. Without the re-export that
// emit has nothing portable to write, so TypeScript reports TS2742 (TS2883
// since TypeScript 7); with it, the emit writes `typia.<Name>`.
//
// `experiments/declaration` is the guard. See samchon/typia#2359.
export type {
  // validate
  AssertionGuard,
  IJsonParseResult,
  IValidation,
  IRandomGenerator,
  // json
  OpenApi,
  IJsonSchemaApplication,
  IJsonSchemaCollection,
  IJsonSchemaUnit,
  // llm
  ILlmController,
  ILlmApplication,
  ILlmFunction,
  ILlmStructuredOutput,
  ILlmSchema,
  // reflect
  IMetadataSchema,
  IMetadataSchemaCollection,
  IMetadataSchemaUnit,
  IMetadataComponents,
  IMetadataTypeTag,
  IJsDocTagInfo,
  // typings
  Classifiable,
  ClassifyResult,
  Primitive,
  Resolved,
  CamelCase,
  KebabCase,
  PascalCase,
  SnakeCase,
  // http
  IReadableURLSearchParams,
} from "@typia/interface";

// `tags` is the only runtime value `@typia/interface` exports. Everything
// above must stay `export type`: the `.mjs` build transpiles per file
// (rolldown/oxc, no cross-file type info), so a plain re-export of a type
// would survive as a runtime import and crash against the CJS-only
// `@typia/interface`.
export { tags } from "@typia/interface";

// `createValidate` and `createValidateEquals` intersect their return type with
// `StandardSchemaV1` so the factories drop straight into Standard Schema
// consumers, which is the whole point of samchon/typia#1425. That puts a type
// owned by another package in a public signature, so it needs the same
// re-export the `@typia/interface` names above get.
export type { StandardSchemaV1 } from "@standard-schema/spec";
