import {
  IHttpLlmApplication,
  IHttpLlmFunction,
  IHttpMigrateApplication,
  IHttpMigrateRoute,
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
} from "@typia/interface";

import { LlmSchemaConverter } from "../../converters/LlmSchemaConverter";
import { LlmJson } from "../../utils";
import { OpenApiValidator } from "../../validators/OpenApiValidator";

/**
 * Composes {@link IHttpLlmApplication} from an {@link IHttpMigrateApplication}.
 *
 * Converts OpenAPI-migrated HTTP routes into LLM function calling schemas,
 * filtering out unsupported methods (HEAD) and content types
 * (multipart/form-data), and shortening function names to fit the configured
 * maximum length.
 */
export namespace HttpLlmApplicationComposer {
  /**
   * Builds an {@link IHttpLlmApplication} from migrated HTTP routes.
   *
   * Iterates all routes, converts each to an {@link IHttpLlmFunction}, and
   * collects conversion errors. Applies function name shortening at the end.
   */
  export const application = (props: {
    migrate: IHttpMigrateApplication;
    config?: Partial<IHttpLlmApplication.IConfig>;
  }): IHttpLlmApplication => {
    // fill in config defaults
    const config: IHttpLlmApplication.IConfig = {
      maxLength: props.config?.maxLength ?? 64,
      equals: props.config?.equals ?? false,
      reference: props.config?.reference ?? true,
      strict: props.config?.strict ?? false,
    };
    // seed with pre-existing migration errors, excluding human-only endpoints
    const errors: IHttpLlmApplication.IError[] = props.migrate.errors
      .filter((e) => e.operation()["x-samchon-human"] !== true)
      .map((e) => ({
        method: e.method,
        path: e.path,
        messages: e.messages,
        operation: () => e.operation(),
        route: () => undefined,
      }));
    // convert each route to an LLM function, rejecting unsupported ones
    const functions: IHttpLlmFunction[] = props.migrate.routes
      .filter((e) => e.operation()["x-samchon-human"] !== true)
      .map((route, i) => {
        // reject HEAD — LLMs cannot interpret header-only responses
        if (route.method === "head") {
          errors.push({
            method: route.method,
            path: route.path,
            messages: ["HEAD method is not supported in the LLM application."],
            operation: () => route.operation(),
            route: () => route as any as IHttpMigrateRoute,
          });
          return null;
          // reject multipart/form-data — binary uploads not expressible in JSON Schema
        } else if (
          route.body?.type === "multipart/form-data" ||
          route.success?.type === "multipart/form-data"
        ) {
          errors.push({
            method: route.method,
            path: route.path,
            messages: [
              `The "multipart/form-data" content type is not supported in the LLM application.`,
            ],
            operation: () => route.operation(),
            route: () => route as any as IHttpMigrateRoute,
          });
          return null;
        }
        const localErrors: string[] = [];
        const func: IHttpLlmFunction | null = composeFunction({
          components: props.migrate.document().components,
          config,
          route,
          errors: localErrors,
          index: i,
        });
        if (func === null)
          errors.push({
            method: route.method,
            path: route.path,
            messages: localErrors,
            operation: () => route.operation(),
            route: () => route as any as IHttpMigrateRoute,
          });
        return func;
      })
      .filter((v): v is IHttpLlmFunction => v !== null);

    const app: IHttpLlmApplication = {
      config,
      functions,
      errors,
    };
    shorten(app, props.config?.maxLength ?? 64);
    return app;
  };

  /**
   * Converts a single {@link IHttpMigrateRoute} into an {@link IHttpLlmFunction}
   * by composing parameter/output schemas and validating function name
   * constraints.
   */
  const composeFunction = (props: {
    components: OpenApi.IComponents;
    route: IHttpMigrateRoute;
    config: IHttpLlmApplication.IConfig;
    errors: string[];
    index: number;
  }): IHttpLlmFunction | null => {
    // accessor prefix for error messages (mirrors OpenAPI document structure)
    const endpoint: string = `$input.paths[${JSON.stringify(props.route.path)}][${JSON.stringify(props.route.method)}]`;
    const operation: OpenApi.IOperation = props.route.operation();
    const description: string | undefined = concatDescription({
      summary: operation.summary,
      description: operation.description,
    });
    if ((description?.length ?? 0) > 1_024) {
      props.errors.push(
        `The description of the function is too long (must be equal or less than 1,024 characters, but ${description!.length.toLocaleString()} length).`,
      );
    }

    // build function name from route accessor, replacing forbidden chars
    const name: string = emend(props.route.accessor.join("_"));
    const isNameVariable: boolean = /^[a-zA-Z0-9_-]+$/.test(name);
    const isNameStartsWithNumber: boolean = /^[0-9]/.test(name[0] ?? "");
    if (isNameVariable === false)
      props.errors.push(
        `Elements of path (separated by '/') must be composed with alphabets, numbers, underscores, and hyphens`,
      );
    if (isNameStartsWithNumber === true)
      props.errors.push(`Function name cannot start with a number.`);

    //----
    // CONSTRUCT SCHEMAS
    //----
    // merge path parameters, query, and body into a single object schema
    const parameters: OpenApi.IJsonSchema.IObject = {
      type: "object",
      properties: Object.fromEntries([
        // path parameters (e.g., /users/:id)
        ...props.route.parameters.map(
          (s) =>
            [
              s.key,
              {
                ...s.schema,
                description: s.parameter().description ?? s.schema.description,
              },
            ] as const,
        ),
        // query parameters
        ...(props.route.query
          ? [
              [
                props.route.query.key,
                {
                  ...props.route.query.schema,
                  title:
                    props.route.query.title() ?? props.route.query.schema.title,
                  description:
                    props.route.query.description() ??
                    props.route.query.schema.description,
                },
              ] as const,
            ]
          : []),
        // request body
        ...(props.route.body
          ? [
              [
                props.route.body.key,
                {
                  ...props.route.body.schema,
                  description:
                    props.route.body.description() ??
                    props.route.body.schema.description,
                },
              ] as const,
            ]
          : []),
      ]),
    };
    parameters.required = Object.keys(parameters.properties ?? {});

    // convert merged object schema to LLM parameters
    const llmParameters: IResult<
      ILlmSchema.IParameters,
      IJsonSchemaTransformError
    > = LlmSchemaConverter.parameters({
      config: props.config,
      components: props.components,
      schema: parameters,
      accessor: `${endpoint}.parameters`,
    });

    // convert response schema to LLM output parameters
    const output:
      | IResult<ILlmSchema.IParameters, IJsonSchemaTransformError>
      | undefined = props.route.success
      ? LlmSchemaConverter.parameters({
          config: props.config,
          components: props.components,
          schema: props.route.success.schema as
            | OpenApi.IJsonSchema.IObject
            | OpenApi.IJsonSchema.IReference,
          accessor: `${endpoint}.responses[${JSON.stringify(props.route.success.status)}][${JSON.stringify(props.route.success.type)}].schema`,
        })
      : undefined;

    //----
    // CONVERSION
    //----
    // bail out if any validation or conversion failed
    if (
      output?.success === false ||
      llmParameters.success === false ||
      isNameVariable === false ||
      isNameStartsWithNumber === true ||
      (description?.length ?? 0) > 1_024
    ) {
      if (output?.success === false)
        props.errors.push(
          ...output.error.reasons.map((r) => `${r.accessor}: ${r.message}`),
        );
      if (llmParameters.success === false)
        props.errors.push(
          // rewrite internal accessor to match OpenAPI requestBody path
          ...llmParameters.error.reasons.map((r) => {
            const accessor: string = r.accessor.replace(
              `parameters.properties["body"]`,
              `requestBody.content[${JSON.stringify(props.route.body?.type ?? "application/json")}].schema`,
            );
            return `${accessor}: ${r.message}`;
          }),
        );
      return null;
    }

    // assemble the LLM function
    return {
      method: props.route.method as "get",
      path: props.route.path,
      name,
      parameters: llmParameters.value,
      output: output?.value,
      description,
      deprecated: operation.deprecated,
      tags: operation.tags,
      parse: (input: string) => LlmJson.parse(input, llmParameters.value),
      coerce: (input: unknown) => LlmJson.coerce(input, llmParameters.value),
      validate: OpenApiValidator.create({
        components: props.components,
        schema: parameters,
        required: true,
        equals: props.config.equals ?? false,
      }),
      route: () => props.route as any,
      operation: () => props.route.operation(),
    };
  };

  /**
   * Shortens function names exceeding the character limit.
   *
   * Tries progressively shorter accessor suffixes first, then falls back to
   * index-prefixed names, and finally UUID as a last resort.
   */
  export const shorten = (
    app: IHttpLlmApplication,
    limit: number = 64,
  ): void => {
    // collect all names for uniqueness checks
    const dictionary: Set<string> = new Set();
    const longFunctions: IHttpLlmFunction[] = [];
    for (const func of app.functions) {
      dictionary.add(func.name);
      if (func.name.length > limit) {
        longFunctions.push(func);
      }
    }
    if (longFunctions.length === 0) return;

    let index: number = 0;
    for (const func of longFunctions) {
      let success: boolean = false;
      const rename = (str: string) => {
        dictionary.delete(func.name);
        dictionary.add(str);
        func.name = str;
        success = true;
      };
      // try dropping leading accessor segments to shorten the name
      // (e.g., "api_users_getById" → "users_getById" → "getById")
      for (let i: number = 1; i < func.route().accessor.length; ++i) {
        const shortName: string = func.route().accessor.slice(i).join("_");
        if (shortName.length > limit - 8)
          continue; // reserve room for "_N_" prefix
        else if (dictionary.has(shortName) === false) rename(shortName);
        else {
          // name collision — prefix with a counter to disambiguate
          const newName: string = `_${index}_${shortName}`;
          if (dictionary.has(newName) === true) continue;
          rename(newName);
          ++index;
        }
        break;
      }
      // last resort — all suffix attempts failed or collided
      if (success === false) rename(randomFormatUuid());
    }
  };
}

const randomFormatUuid = (): string =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

/** Replaces forbidden characters (`$`, `%`, `.`) with underscores. */
const emend = (str: string): string => {
  for (const ch of FORBIDDEN) str = str.split(ch).join("_");
  return str;
};

const FORBIDDEN = ["$", "%", "."];

/**
 * Concatenates summary and description into a single string.
 *
 * If both are present, joins them with a period and double newline, avoiding
 * duplication when the description already starts with the summary.
 */
const concatDescription = (p: {
  summary?: string | undefined;
  description?: string | undefined;
}): string | undefined => {
  if (!p.summary?.length || !p.description?.length)
    return p.summary || p.description;
  const summary: string = p.summary.endsWith(".")
    ? p.summary.slice(0, -1)
    : p.summary;
  return p.description.startsWith(summary)
    ? p.description
    : summary + ".\n\n" + p.description;
};
