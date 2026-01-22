import { OpenApi } from "../OpenApi";
import { IHttpLlmApplication } from "../structures/IHttpLlmApplication";
import { IHttpLlmFunction } from "../structures/IHttpLlmFunction";
import { IHttpMigrateApplication } from "../structures/IHttpMigrateApplication";
import { IHttpMigrateRoute } from "../structures/IHttpMigrateRoute";
import { ILlmSchema } from "../structures/ILlmSchema";
import { IOpenApiSchemaError } from "../structures/IOpenApiSchemaError";
import { IResult } from "../structures/IResult";
import { OpenApiValidator } from "../utils/OpenApiValidator";
import { LlmSchemaComposer } from "./LlmSchemaComposer";

export namespace HttpLlmComposer {
  export const application = (props: {
    migrate: IHttpMigrateApplication;
    config?: Partial<IHttpLlmApplication.IConfig>;
  }): IHttpLlmApplication => {
    // COMPOSE FUNCTIONS
    const config: IHttpLlmApplication.IConfig = {
      separate: props.config?.separate ?? null,
      maxLength: props.config?.maxLength ?? 64,
      equals: props.config?.equals ?? false,
      reference: props.config?.reference ?? true,
      strict: props.config?.strict ?? false,
    };
    const errors: IHttpLlmApplication.IError[] = props.migrate.errors
      .filter((e) => e.operation()["x-samchon-human"] !== true)
      .map((e) => ({
        method: e.method,
        path: e.path,
        messages: e.messages,
        operation: () => e.operation(),
        route: () => undefined,
      }));
    const functions: IHttpLlmFunction[] = props.migrate.routes
      .filter((e) => e.operation()["x-samchon-human"] !== true)
      .map((route, i) => {
        if (route.method === "head") {
          errors.push({
            method: route.method,
            path: route.path,
            messages: ["HEAD method is not supported in the LLM application."],
            operation: () => route.operation(),
            route: () => route as any as IHttpMigrateRoute,
          });
          return null;
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

  const composeFunction = (props: {
    components: OpenApi.IComponents;
    route: IHttpMigrateRoute;
    config: IHttpLlmApplication.IConfig;
    errors: string[];
    index: number;
  }): IHttpLlmFunction | null => {
    // METADATA
    const endpoint: string = `$input.paths[${JSON.stringify(props.route.path)}][${JSON.stringify(props.route.method)}]`;
    const operation: OpenApi.IOperation = props.route.operation();
    const description: [string | undefined, number] = (() => {
      if (!operation.summary?.length || !operation.description?.length)
        return [
          operation.summary || operation.description,
          operation.summary?.length ?? operation.description?.length ?? 0,
        ];
      const summary: string = operation.summary.endsWith(".")
        ? operation.summary.slice(0, -1)
        : operation.summary;
      const final: string = operation.description.startsWith(summary)
        ? operation.description
        : summary + ".\n\n" + operation.description;
      return [final, final.length];
    })();
    if (description[1] > 1_024) {
      props.errors.push(
        `The description of the function is too long (must be equal or less than 1,024 characters, but ${description[1].toLocaleString()} length).`,
      );
    }

    // FUNCTION NAME
    const name: string = emend(props.route.accessor.join("_"));
    const isNameVariable: boolean = /^[a-zA-Z0-9_-]+$/.test(name);
    const isNameStartsWithNumber: boolean = /^[0-9]/.test(name[0] ?? "");
    if (isNameVariable === false)
      props.errors.push(
        `Elements of path (separated by '/') must be composed with alphabets, numbers, underscores, and hyphens`,
      );

    //----
    // CONSTRUCT SCHEMAS
    //----
    // PARAMETERS
    const parameters: OpenApi.IJsonSchema.IObject = {
      type: "object",
      properties: Object.fromEntries([
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

    const llmParameters: IResult<ILlmSchema.IParameters, IOpenApiSchemaError> =
      LlmSchemaComposer.parameters({
        config: props.config,
        components: props.components,
        schema: parameters,
        accessor: `${endpoint}.parameters`,
      });

    // RETURN VALUE
    const output: IResult<ILlmSchema, IOpenApiSchemaError> | undefined = props
      .route.success
      ? LlmSchemaComposer.schema({
          config: props.config,
          components: props.components,
          schema: props.route.success.schema,
          accessor: `${endpoint}.responses[${JSON.stringify(props.route.success.status)}][${JSON.stringify(props.route.success.type)}].schema`,
          $defs: llmParameters.success ? llmParameters.value.$defs : {},
        })
      : undefined;

    //----
    // CONVERSION
    //----
    if (
      output?.success === false ||
      llmParameters.success === false ||
      isNameVariable === false ||
      isNameStartsWithNumber === true ||
      description[1] > 1_024
    ) {
      if (output?.success === false)
        props.errors.push(
          ...output.error.reasons.map((r) => `${r.accessor}: ${r.message}`),
        );
      if (llmParameters.success === false)
        props.errors.push(
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
    return {
      method: props.route.method as "get",
      path: props.route.path,
      name,
      parameters: llmParameters.value,
      separated: props.config.separate
        ? LlmSchemaComposer.separate({
            predicate: props.config.separate,
            parameters: llmParameters.value,
            equals: props.config.equals ?? false,
          })
        : undefined,
      output: output?.value,
      description: description[0],
      deprecated: operation.deprecated,
      tags: operation.tags,
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

  export const shorten = (
    app: IHttpLlmApplication,
    limit: number = 64,
  ): void => {
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
      let rename = (str: string) => {
        dictionary.delete(func.name);
        dictionary.add(str);
        func.name = str;
        success = true;
      };
      for (let i: number = 1; i < func.route().accessor.length; ++i) {
        const shortName: string = func.route().accessor.slice(i).join("_");
        if (shortName.length > limit - 8) continue;
        else if (dictionary.has(shortName) === false) rename(shortName);
        else {
          const newName: string = `_${index}_${shortName}`;
          if (dictionary.has(newName) === true) continue;
          rename(newName);
          ++index;
        }
        break;
      }
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

const emend = (str: string): string => {
  for (const ch of FORBIDDEN) str = str.split(ch).join("_");
  return str;
};

const FORBIDDEN = ["$", "%", "."];
