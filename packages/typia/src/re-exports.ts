export type {
  // validate
  AssertionGuard,
  IJsonParseResult,
  IValidation,
  IRandomGenerator,
  // json
  OpenApi,
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
