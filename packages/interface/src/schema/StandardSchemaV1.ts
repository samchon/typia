/**
 * Standard Schema v1 interoperability contract.
 *
 * `StandardSchemaV1` is the community specification that lets a validator be
 * handed to any library that accepts one — `up-fetch`, tRPC, Hono, TanStack
 * Form — without either side knowing the other. `typia.createValidate` and
 * `typia.createValidateEquals` return a function that also satisfies it, so
 * their result drops straight into those libraries.
 *
 * The specification is purely structural: a value conforms by having the
 * `~standard` property, never by importing a particular declaration. That is
 * why this type is declared here rather than taken from `@standard-schema/spec`
 * as a dependency, the same way `OpenApi` and `SwaggerV2` are declared here
 * instead of pulled from an OpenAPI package.
 *
 * The reason is portability of the consumer's own declarations. A type `typia`
 * names in a public signature has to be nameable by whoever compiles against it
 * with `declaration: true`, and a package that merely sits beside `typia` in
 * the dependency tree is not nameable from there — pnpm and Yarn Plug'n'Play
 * both place it out of reach, and TypeScript refuses to write a declaration
 * that would not resolve for the next consumer down the line (TS2742, TS2883
 * since TypeScript 7). `zod` and `valibot` both declare the specification
 * in-house rather than depend on it, and neither ships a runtime dependency for
 * it.
 *
 * `tests/test-interface` pins this declaration against the real
 * `@standard-schema/spec` package, which stays a development dependency, so a
 * drift from the specification fails the build rather than reaching a user.
 *
 * The upstream specification factors the version, vendor, and types members
 * into a shared `StandardTypedV1` base that `StandardJSONSchemaV1` also
 * extends. typia implements neither of those, so those members are inlined here
 * and the base is left out; the resulting shape is identical.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template Input Type accepted by the schema before validation
 * @template Output Type produced by the schema after validation
 *
 * @evidence contracts/common.md#principled-implementation The interface is the specification's structural contract, a readonly `~standard` property of the properties record; conformance is by structure and not by an import, so a validator returned by typia satisfies it without a dependency.
 * @evidence contracts/common.md#clear-and-simple-design Declared locally rather than imported because a dependency named in public signatures has to be nameable by consumers, as the comment explains. The shared base used upstream is inlined because typia does not implement the other interface that extends it.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The declaration is a copy of the published specification kept in step by a compile-time test and not an altered or partial variant of it.
 * @evidence contracts/common.md#meaningful-documentation The comment explains the specification, why it is declared here, how drift is detected and the inlined base.
 *
 * @see https://standardschema.dev
 */
export interface StandardSchemaV1<Input = unknown, Output = Input> {
  /** The Standard Schema properties. */
  readonly "~standard": StandardSchemaV1.Props<Input, Output>;
}

export namespace StandardSchemaV1 {
  /**
   * The Standard Schema properties interface.
   *
   * @template Input Type accepted before validation
   * @template Output Type produced after validation
   *
   * @evidence contracts/common.md#principled-implementation Props has version 1, a vendor name, an optional phantom `types` and a `validate` function that accepts unknown and returns a result or a promise of one, as the specification requires.
   * @evidence contracts/common.md#clear-and-simple-design Four readonly members, matching the specification.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The types member is never populated at runtime and is only a type carrier, as documented.
   * @evidence contracts/common.md#meaningful-documentation The comment describes each member and the phantom nature of types.
   */
  export interface Props<Input = unknown, Output = Input> {
    /** The version number of the standard. */
    readonly version: 1;

    /** The vendor name of the schema library. */
    readonly vendor: string;

    /**
     * Inferred types associated with the schema.
     *
     * Never populated at runtime. It carries the type arguments so
     * {@link StandardSchemaV1.InferInput} and
     * {@link StandardSchemaV1.InferOutput} can read them back.
     */
    readonly types?: Types<Input, Output> | undefined;

    /**
     * Validates unknown input values.
     *
     * @evidence contracts/common.md#principled-implementation The function takes an unknown value and optional library options and returns a success or failure result, synchronously or as a promise, so a consumer must handle both.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued readonly property that matches the specification signature.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It performs no validation in the declaration.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment says it validates unknown input values.
     */
    readonly validate: (
      value: unknown,
      options?: Options | undefined,
    ) => Result<Output> | Promise<Result<Output>>;
  }

  /**
   * Additional vendor-specific parameters of {@link Props.validate}.
   *
   * @evidence contracts/common.md#principled-implementation Options has an optional record for vendor-specific parameters, matching the specification.
   * @evidence contracts/common.md#clear-and-simple-design One optional member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain data record.
   * @evidence contracts/common.md#meaningful-documentation The comment says it is for vendor-specific parameters of validate.
   */
  export interface Options {
    /** Explicit support for additional vendor-specific parameters, if needed. */
    readonly libraryOptions?: Record<string, unknown> | undefined;
  }

  /**
   * The result interface of the validate function.
   *
   * @template Output Type produced after validation
   *
   * @evidence contracts/common.md#principled-implementation The union of success and failure results discriminated by the presence of `issues`, as in the specification.
   * @evidence contracts/common.md#clear-and-simple-design An alias of two records.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A representation only.
   * @evidence contracts/common.md#meaningful-documentation The comment says it is the result of validate.
   */
  export type Result<Output> = SuccessResult<Output> | FailureResult;

  /**
   * The result interface if validation succeeds.
   *
   * @template Output Type produced after validation
   *
   * @evidence contracts/common.md#principled-implementation A value of the output type and an `issues` member typed undefined, so a falsy `issues` indicates success.
   * @evidence contracts/common.md#clear-and-simple-design Two readonly members.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain data record.
   * @evidence contracts/common.md#meaningful-documentation The comments say what each member signals.
   */
  export interface SuccessResult<Output> {
    /** The typed output value. */
    readonly value: Output;

    /** A falsy value for `issues` indicates success. */
    readonly issues?: undefined;
  }

  /**
   * The result interface if validation fails.
   *
   * @evidence contracts/common.md#principled-implementation A readonly array of issues is the whole failure, and its presence discriminates it from success.
   * @evidence contracts/common.md#clear-and-simple-design One member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain data record.
   * @evidence contracts/common.md#meaningful-documentation The comment says it is the result when validation fails.
   */
  export interface FailureResult {
    /** The issues of failed validation. */
    readonly issues: ReadonlyArray<Issue>;
  }

  /**
   * The issue interface of the failure output.
   *
   * @evidence contracts/common.md#principled-implementation A message and an optional path of keys or segments express where and why validation failed, as in the specification.
   * @evidence contracts/common.md#clear-and-simple-design Two readonly members.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain data record.
   * @evidence contracts/common.md#meaningful-documentation Each member is described.
   */
  export interface Issue {
    /** The error message of the issue. */
    readonly message: string;

    /** The path of the issue, if any. */
    readonly path?: ReadonlyArray<PropertyKey | PathSegment> | undefined;
  }

  /**
   * The path segment interface of the issue.
   *
   * @evidence contracts/common.md#principled-implementation A segment wraps a property key so a path can mix bare keys and wrapped ones, as the specification allows.
   * @evidence contracts/common.md#clear-and-simple-design One readonly member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain data record.
   * @evidence contracts/common.md#meaningful-documentation The comment and member comment describe the key.
   */
  export interface PathSegment {
    /** The key representing a path segment. */
    readonly key: PropertyKey;
  }

  /**
   * The Standard types interface.
   *
   * @template Input Type accepted before validation
   * @template Output Type produced after validation
   *
   * @evidence contracts/common.md#principled-implementation The input and output members are used only to carry the type arguments at compile time.
   * @evidence contracts/common.md#clear-and-simple-design Two readonly members.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It is never populated at runtime.
   * @evidence contracts/common.md#meaningful-documentation The comment says it is the Standard types interface.
   */
  export interface Types<Input = unknown, Output = Input> {
    /** The input type of the schema. */
    readonly input: Input;

    /** The output type of the schema. */
    readonly output: Output;
  }

  /**
   * Infers the input type of a Standard Schema.
   *
   * @template Schema Standard Schema to read the input type from
   *
   * @evidence contracts/common.md#principled-implementation It indexes the non-null `types` member of a schema's `~standard` property for its `input`, which recovers the declared input type; for a schema whose `types` is absent the result is `never`.
   * @evidence contracts/common.md#clear-and-simple-design One indexed access type.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It is a type-level lookup and has no runtime effect.
   * @evidence contracts/common.md#meaningful-documentation The comment says it infers the input type and documents the Schema parameter.
   */
  export type InferInput<Schema extends StandardSchemaV1> = NonNullable<
    Schema["~standard"]["types"]
  >["input"];

  /**
   * Infers the output type of a Standard Schema.
   *
   * @template Schema Standard Schema to read the output type from
   *
   * @evidence contracts/common.md#principled-implementation It indexes the non-null `types` member for `output`, the dual of InferInput.
   * @evidence contracts/common.md#clear-and-simple-design One indexed access type.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It is a type-level lookup and has no runtime effect.
   * @evidence contracts/common.md#meaningful-documentation The comment says it infers the output type and documents the Schema parameter.
   */
  export type InferOutput<Schema extends StandardSchemaV1> = NonNullable<
    Schema["~standard"]["types"]
  >["output"];
}
