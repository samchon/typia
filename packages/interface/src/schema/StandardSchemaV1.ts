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
 * @template Input Type accepted by the schema before validation
 * @template Output Type produced by the schema after validation
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

    /** Validates unknown input values. */
    readonly validate: (
      value: unknown,
      options?: Options | undefined,
    ) => Result<Output> | Promise<Result<Output>>;
  }

  /** Additional vendor-specific parameters of {@link Props.validate}. */
  export interface Options {
    /** Explicit support for additional vendor-specific parameters, if needed. */
    readonly libraryOptions?: Record<string, unknown> | undefined;
  }

  /**
   * The result interface of the validate function.
   *
   * @template Output Type produced after validation
   */
  export type Result<Output> = SuccessResult<Output> | FailureResult;

  /**
   * The result interface if validation succeeds.
   *
   * @template Output Type produced after validation
   */
  export interface SuccessResult<Output> {
    /** The typed output value. */
    readonly value: Output;

    /** A falsy value for `issues` indicates success. */
    readonly issues?: undefined;
  }

  /** The result interface if validation fails. */
  export interface FailureResult {
    /** The issues of failed validation. */
    readonly issues: ReadonlyArray<Issue>;
  }

  /** The issue interface of the failure output. */
  export interface Issue {
    /** The error message of the issue. */
    readonly message: string;

    /** The path of the issue, if any. */
    readonly path?: ReadonlyArray<PropertyKey | PathSegment> | undefined;
  }

  /** The path segment interface of the issue. */
  export interface PathSegment {
    /** The key representing a path segment. */
    readonly key: PropertyKey;
  }

  /**
   * The Standard types interface.
   *
   * @template Input Type accepted before validation
   * @template Output Type produced after validation
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
   */
  export type InferInput<Schema extends StandardSchemaV1> = NonNullable<
    Schema["~standard"]["types"]
  >["input"];

  /**
   * Infers the output type of a Standard Schema.
   *
   * @template Schema Standard Schema to read the output type from
   */
  export type InferOutput<Schema extends StandardSchemaV1> = NonNullable<
    Schema["~standard"]["types"]
  >["output"];
}
