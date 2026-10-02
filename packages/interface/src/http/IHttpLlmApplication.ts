import { OpenApi } from "../openapi/OpenApi";
import { ILlmSchema } from "../schema/ILlmSchema";
import { IHttpLlmFunction } from "./IHttpLlmFunction";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * LLM function calling application from OpenAPI document.
 *
 * `IHttpLlmApplication` is a collection of {@link IHttpLlmFunction} schemas
 * converted from {@link OpenApi.IDocument} by `HttpLlm.application()`. Each
 * eligible OpenAPI operation becomes an LLM-callable function. Operations
 * marked with `x-samchon-human: true` are omitted from both result lists.
 * Eligibility first follows the migration-supported methods `head`, `get`,
 * `post`, `put`, `patch`, `delete`, and `query`; other method entries are
 * omitted.
 *
 * Successful conversions go to {@link functions}, failed ones to {@link errors}
 * with detailed error messages. Common failure causes:
 *
 * - Unsupported schema features (tuples, `oneOf` with incompatible types)
 * - Missing required fields in OpenAPI document
 * - HEAD operations or multipart request/response bodies
 *
 * Configure behavior via {@link IHttpLlmApplication.IConfig}:
 *
 * - {@link IHttpLlmApplication.IConfig.maxLength}: Function name length limit
 * - {@link ILlmSchema.IConfig.strict}: OpenAI structured output mode
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The two lists distinguish successful conversions from reported failures among eligible operations. The composer filters human-only operations from both migration routes and errors; the config records the composition settings and the optional version records the source info.version when present.
 * @evidence contracts/common.md#clear-and-simple-design Two required lists, a configuration record and an optional version keep conversion results and their context together; config and error types are namespaced.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Conversion failures are represented as data for eligible operations; the documented human-only filter intentionally omits those endpoints rather than fabricating callable tools.
 * @evidence contracts/common.md#meaningful-documentation The comment explains the success and error split, common failure causes and the configuration options with links.
 */
export interface IHttpLlmApplication {
  /** Successfully converted LLM function schemas. */
  functions: IHttpLlmFunction[];

  /** Operations that failed conversion. */
  errors: IHttpLlmApplication.IError[];

  /** Configuration used for composition. */
  config: IHttpLlmApplication.IConfig;

  /**
   * Version of the API, taken from the OpenAPI document's `info.version`.
   *
   * `undefined` when the source document carries no version info.
   */
  version?: string | undefined;
}
export namespace IHttpLlmApplication {
  /**
   * Configuration for HTTP LLM application composition.
   *
   * @evidence contracts/common.md#principled-implementation Config extends the LLM schema configuration and adds a name length limit and a strictness flag for superfluous properties. The documented shortening rule is the one implemented by the composer's shorten and abbreviate functions, which choose deterministic unique names that fit the limit and do not start with a digit, and throw when every hashed name is taken.
   * @evidence contracts/common.md#clear-and-simple-design Two added fields on an existing configuration interface rather than a separate options object.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The shortening rule is a documented contract of the composer; it is not a consumer-specific name table.
   * @evidence contracts/common.md#meaningful-documentation The comment gives defaults and describes the shortening procedure including its failure condition.
   */
  export interface IConfig extends ILlmSchema.IConfig {
    /**
     * Maximum function name length.
     *
     * A longer name becomes its longest non-empty accessor suffix of at most
     * `maxLength - 8` characters that is free, as is or with a counter prefix.
     * When no suffix is free, the name keeps as much of its last segment as
     * fits beside a hash of the full name, none of it below 9. Every name is
     * deterministic, unique, at most `maxLength`, and does not start with a
     * digit. Composition throws when a name must be shortened and every such
     * hashed name is taken, as all are below 2.
     *
     * @default 64
     */
    maxLength: number;

    /**
     * Whether to disallow superfluous properties.
     *
     * @default false
     */
    equals: boolean;
  }

  /**
   * Composition error for an operation.
   *
   * @evidence contracts/common.md#principled-implementation An error holds the method, path and messages that identify the failed operation plus accessors to the source operation and route, whose route is possibly undefined because failures can occur before routes exist.
   * @evidence contracts/common.md#clear-and-simple-design Two accessor functions in place of copies keep the source data in one place.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain record; messages are produced elsewhere and no failure is hidden by this type.
   * @evidence contracts/common.md#meaningful-documentation The comment says it is a composition error for an operation, and each field and accessor is documented.
   */
  export interface IError {
    /** HTTP method of the failed operation. */
    method: "head" | "get" | "post" | "put" | "patch" | "delete" | "query";

    /** Path of the failed operation. */
    path: string;

    /** Error messages describing the failure. */
    messages: string[];

    /**
     * Returns source {@link OpenApi.IOperation}.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the source operation, so the error record does not duplicate or retain a second copy of the document structure.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued property that matches the sibling route accessor.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns the existing source object; no clone or patch is involved.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment says what it returns.
     */
    operation: () => OpenApi.IOperation;

    /**
     * Returns source route. Undefined if error occurred at migration level.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the migration route or undefined, undefined being the case where migration itself failed, so a route value is never fabricated for an operation that could not be migrated.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued property returning an optional route.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not synthesize a route for failed migration.
     * @evidence contracts/common.md#meaningful-documentation The comment states the undefined case.
     */
    route: () => IHttpMigrateRoute | undefined;
  }
}
