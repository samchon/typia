import {
  IJsonSchemaApplication,
  IJsonSchemaTransformError,
  ILlmApplication,
  ILlmFunction,
  ILlmSchema,
  IResult,
  IValidation,
  OpenApi,
} from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import ts from "typescript";

import { IProgrammerProps } from "../../context/IProgrammerProps";
import { ITypiaContext } from "../../context/ITypiaContext";
import { LiteralFactory } from "../../factories/LiteralFactory";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { TypeFactory } from "../../factories/TypeFactory";
import { MetadataFunction } from "../../schemas/metadata/MetadataFunction";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";
import { MetadataParameter } from "../../schemas/metadata/MetadataParameter";
import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { LlmSchemaProgrammer } from "./LlmSchemaProgrammer";

/**
 * Generates LLM function calling application from TypeScript class/interface.
 *
 * Converts TypeScript types to {@link ILlmApplication} with function schemas
 * compatible with LLM function calling. Validates type constraints (single
 * object parameter, no dynamic keys) and generates runtime validators.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace LlmApplicationProgrammer {
  export interface IProps extends IProgrammerProps {
    config?: Partial<
      ILlmSchema.IConfig & {
        equals: boolean;
      }
    >;
  }

  export interface IWriteProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    metadata: MetadataSchema;
    config?: Partial<
      ILlmSchema.IConfig & {
        equals: boolean;
      }
    >;
    name?: string;
  }

  export const write = (props: IWriteProps): ts.CallExpression => {
    const application: ILlmApplication.__IPrimitive = writeApplication({
      context: props.context,
      modulo: props.modulo,
      config: props.config,
      metadata: props.metadata,
      name: props.name,
    });

    const typeNode: ts.ImportTypeNode = props.context.importer.type({
      file: "typia",
      name: "ILlmApplication.__IPrimitive",
      arguments: props.name
        ? [ts.factory.createTypeReferenceNode(props.name)]
        : undefined,
    });

    return ts.factory.createCallExpression(
      props.context.importer.internal("llmApplicationFinalize"),
      props.name ? [ts.factory.createTypeReferenceNode(props.name)] : undefined,
      [
        ts.factory.createAsExpression(
          ts.factory.createSatisfiesExpression(
            LiteralFactory.write(application),
            typeNode,
          ),
          typeNode,
        ),
        ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment(
              "equals",
              props.config?.equals === true
                ? ts.factory.createTrue()
                : ts.factory.createFalse(),
            ),
          ],
          false,
        ),
      ],
    );
  };

  export const validate = (props: {
    config?: Partial<ILlmSchema.IConfig>;
    metadata: MetadataSchema;
    explore: MetadataFactory.IExplore;
  }): string[] => {
    // the class
    if (props.explore.top === false)
      if (
        props.explore.object === props.metadata?.objects[0]?.type &&
        typeof props.explore.property === "string" &&
        props.metadata.size() === 1 &&
        props.metadata.nullable === false &&
        props.metadata.isRequired() === true &&
        props.metadata.functions.length === 1
      )
        return validateFunction(
          props.explore.property,
          props.metadata.functions[0]!,
        );
      else return LlmSchemaProgrammer.validate(props);

    // top-level type must be a single non-nullable required object
    const output: string[] = [];
    const isValidType: boolean =
      props.metadata.size() === 1 &&
      props.metadata.objects.length === 1 &&
      props.metadata.isRequired() === true &&
      props.metadata.nullable === false;
    if (isValidType === false)
      output.push(
        "LLM application's generic argument must be a class/interface type.",
      );

    // validate each property of the class/interface
    const object: MetadataObjectType | undefined =
      props.metadata.objects[0]?.type;
    if (object !== undefined) {
      if (object.properties.some((p) => p.key.isSoleLiteral() === false))
        output.push(
          "LLM application does not allow dynamic keys on class/interface type.",
        );
      let least: boolean = false; // tracks whether at least one function exists
      for (const p of object.properties) {
        const rawName: string = p.key.getSoleLiteral()!;
        const name: string = JSON.stringify(rawName);
        const value: MetadataSchema = p.value;
        if (value.functions.length) {
          least ||= true;
          if (isValidType === false) {
            if (value.functions.length !== 1 || value.size() !== 1)
              output.push(
                `LLM application's function (${name}) type does not allow union type.`,
              );
            if (value.isRequired() === false)
              output.push(
                `LLM application's function (${name}) type must be required.`,
              );
            if (value.nullable === true)
              output.push(
                `LLM application's function (${name}) type must not be nullable.`,
              );
          }

          // validate function name length and pattern
          const prefix: string = `LLM application's function (${name})`;
          if (/^[0-9]/.test(rawName[0] ?? "") === true)
            output.push(`${prefix} name cannot start with a number.`);
          if (/^[a-zA-Z0-9_-]+$/.test(rawName) === false)
            output.push(
              `${prefix} name must contain only alphanumeric characters, underscores, or hyphens.`,
            );
          if (rawName.length > 64)
            output.push(`${prefix} name cannot exceed 64 characters.`);

          const description: string | undefined = concatDescription(
            JsonApplicationProgrammer.writeDescription({
              description:
                p.description ??
                p.jsDocTags.find((tag) => tag.name === "description")?.text?.[0]
                  ?.text ??
                null,
              jsDocTags: p.jsDocTags,
              kind: "summary",
            }),
          );
          if (description !== undefined && description.length > 1_024)
            output.push(
              `LLM application's function (${name}) description must not exceed 1,024 characters.`,
            );
        }
      }
      if (least === false)
        output.push(
          "LLM application's target type must have at least a function type.",
        );
    }
    return output;
  };

  /**
   * Validates that a {@link MetadataSchema} represents a valid
   * {@link ILlmSchema.IParameters} type: a single, non-nullable, non-optional
   * object type without dynamic property keys.
   */
  const validateObjectSchema = (
    prefix: string,
    label: string,
    schema: MetadataSchema,
  ): string[] => {
    const errors: string[] = [];
    if (schema.isRequired() === false)
      errors.push(
        `${prefix} ${label} cannot be optional (union with undefined).`,
      );
    if (schema.nullable === true)
      errors.push(`${prefix} ${label} cannot be nullable.`);
    if (schema.size() !== 1 || schema.objects.length !== 1)
      errors.push(`${prefix} ${label} must be a single object type.`);
    else if (
      schema.objects[0]!.type.properties.some(
        (p) => p.key.isSoleLiteral() === false,
      )
    )
      errors.push(`${prefix} ${label} cannot have dynamic property keys.`);
    return errors;
  };

  const validateFunction = (name: string, func: MetadataFunction): string[] => {
    const messages: string[] = [];
    const prefix: string = `LLM application's function (${JSON.stringify(name)})`;

    // function name
    if (/^[0-9]/.test(name[0] ?? "") === true)
      messages.push(`${prefix} name cannot start with a number.`);
    if (/^[a-zA-Z0-9_-]+$/.test(name) === false)
      messages.push(
        `${prefix} name must contain only alphanumeric characters, underscores, or hyphens.`,
      );
    if (name.length > 64)
      messages.push(`${prefix} name cannot exceed 64 characters.`);

    // output
    if (func.output.size() !== 0)
      messages.push(
        ...validateObjectSchema(prefix, "return type", func.output),
      );

    // parameters
    if (func.parameters.length !== 0 && func.parameters.length !== 1)
      messages.push(
        `${prefix} must have exactly one parameter or no parameters.`,
      );
    if (func.parameters.length !== 0)
      messages.push(
        ...validateObjectSchema(prefix, "parameter", func.parameters[0]!.type),
      );
    return messages;
  };

  export const writeApplication = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    metadata: MetadataSchema;
    config?: Partial<
      ILlmSchema.IConfig & {
        equals: boolean;
      }
    >;
    name?: string;
  }): ILlmApplication.__IPrimitive => {
    const metadata: MetadataSchema = MetadataSchema.unalias(props.metadata);

    // collect the first parameter's MetadataParameter for each valid function,
    // keyed by property name, for runtime validator generation
    const functionParameters: Record<string, MetadataParameter> =
      Object.fromEntries(
        metadata.objects[0]!.type.properties.filter(
          (p) =>
            p.key.isSoleLiteral() &&
            p.value.size() === 1 &&
            p.value.nullable === false &&
            p.value.isRequired() === true &&
            MetadataSchema.unalias(p.value).functions.length === 1,
        )
          .filter(
            (p) =>
              p.jsDocTags.find(
                (tag) =>
                  tag.name === "hidden" ||
                  tag.name === "ignore" ||
                  tag.name === "internal",
              ) === undefined,
          )
          .map((p) => [
            p.key.getSoleLiteral()!,
            MetadataSchema.unalias(p.value).functions[0]!.parameters[0]!,
          ]),
      );

    // build JSON Schema application, filtering out @human-tagged parameters
    const errorMessages: string[] = [];
    const application: IJsonSchemaApplication<"3.1"> =
      JsonApplicationProgrammer.writeApplication({
        version: "3.1",
        metadata,
        filter: (p) =>
          p.jsDocTags.some((tag) => tag.name === "human") === false,
      });
    // convert each JSON Schema function to an LLM function
    const functions: Array<Omit<ILlmFunction, "parse" | "coerce"> | null> =
      application.functions.map((func) =>
        writeFunction({
          context: props.context,
          modulo: props.modulo,
          className: props.name,
          config: props.config,
          components: application.components,
          function: func,
          errors: errorMessages,
          parameter: functionParameters[func.name] ?? null,
        }),
      );
    return {
      functions: functions.filter((f) => f !== null),
    };
  };

  const writeFunction = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    components: OpenApi.IComponents;
    function: IJsonSchemaApplication.IFunction<OpenApi.IJsonSchema>;
    parameter: MetadataParameter | null;
    errors: string[];
    className?: string;
    config:
      | Partial<
          ILlmSchema.IConfig & {
            equals: boolean;
          }
        >
      | undefined;
  }): Omit<ILlmFunction, "parse" | "coerce"> | null => {
    const config: ILlmSchema.IConfig = LlmSchemaConverter.getConfig(
      props.config,
    );

    // convert parameters and output schemas
    const parameters: ILlmSchema.IParameters | null = writeParameters({
      ...props,
      config,
      accessor: `$input.${props.function.name}.parameters`,
    });
    if (parameters === null) return null;
    const output: ILlmSchema.IParameters | null | undefined = writeOutput({
      config,
      components: props.components,
      schema: props.function.output?.schema ?? null,
      errors: props.errors,
      accessor: `$input.${props.function.name}.output`,
    });
    if (output === null) return null;

    // fall back output description from the function metadata
    if (
      output &&
      output.description === undefined &&
      !!props.function.output?.description?.length
    )
      output.description = props.function.output.description;

    // assemble the LLM function
    return {
      name: props.function.name,
      parameters,
      output: output ?? undefined,
      description: concatDescription({
        summary: props.function.summary,
        description: props.function.description,
      }),
      deprecated: props.function.deprecated,
      tags: props.function.tags,
      validate: writeValidator({
        context: props.context,
        modulo: props.modulo,
        parameter: props.parameter,
        name: props.function.name,
        className: props.className,
        equals: props.config?.equals ?? false,
      }),
    };
  };

  const writeParameters = (props: {
    components: OpenApi.IComponents;
    function: IJsonSchemaApplication.IFunction<OpenApi.IJsonSchema>;
    errors: string[];
    accessor: string;
    config: ILlmSchema.IConfig;
  }): ILlmSchema.IParameters | null => {
    // extract the first parameter's object schema, defaulting to empty object
    const schema: OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference =
      (props.function.parameters[0]?.schema as
        | OpenApi.IJsonSchema.IObject
        | OpenApi.IJsonSchema.IReference) ?? {
        type: "object",
        properties: {},
        additionalProperties: false,
        required: [],
      };
    return convertParameters({
      config: props.config,
      components: props.components,
      schema: {
        ...schema,
        title: schema.title ?? props.function.parameters[0]?.title,
        description:
          schema.description ?? props.function.parameters[0]?.description,
      },
      accessor: props.accessor,
      errors: props.errors,
    });
  };

  const writeOutput = (props: {
    components: OpenApi.IComponents;
    config: ILlmSchema.IConfig;
    schema: OpenApi.IJsonSchema | null;
    errors: string[];
    accessor: string;
  }): ILlmSchema.IParameters | null | undefined => {
    if (props.schema === null) return undefined;
    return convertParameters({
      config: props.config,
      components: props.components,
      schema: props.schema as
        | OpenApi.IJsonSchema.IObject
        | OpenApi.IJsonSchema.IReference,
      accessor: props.accessor,
      errors: props.errors,
    });
  };

  /**
   * Converts an OpenAPI object schema to {@link ILlmSchema.IParameters},
   * collecting transformation errors into the provided array.
   */
  const convertParameters = (props: {
    config: ILlmSchema.IConfig;
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema.IObject | OpenApi.IJsonSchema.IReference;
    accessor: string;
    errors: string[];
  }): ILlmSchema.IParameters | null => {
    const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
      LlmSchemaConverter.parameters({
        config: props.config,
        components: props.components,
        schema: props.schema,
        accessor: props.accessor,
      });
    if (result.success === false) {
      props.errors.push(
        ...result.error.reasons.map((r) => `  - ${r.accessor}: ${r.message}`),
      );
      return null;
    }
    return result.value;
  };

  const writeValidator = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    parameter: MetadataParameter | null;
    name: string;
    equals: boolean;
    className?: string;
  }): ((props: unknown) => IValidation<unknown>) => {
    // no parameter metadata — generate a permissive `any` validator
    if (props.parameter === null)
      return ValidateProgrammer.write({
        ...props,
        type: props.context.checker.getTypeFromTypeNode(
          TypeFactory.keyword("any"),
        ),
        config: {
          equals: props.equals,
        },
        name: undefined,
      }) as any;

    // unreachable — tsType is always set by the transformer
    if (props.parameter.tsType === undefined)
      throw new Error(
        "Failed to write LLM application's function validator. You don't have to call `LlmApplicationOfValidator.write()` function by yourself, but only by the `typia.llm.applicationOfValidate()` function.",
      );

    // generate a typed validator from the parameter's TypeScript type
    return ValidateProgrammer.write({
      ...props,
      type: props.parameter.tsType!,
      config: {
        equals: props.equals,
      },
      name: props.className
        ? `Parameters<${props.className}[${JSON.stringify(props.name)}]>[0]`
        : undefined,
    }) satisfies ts.CallExpression as any as (
      props: unknown,
    ) => IValidation<unknown>;
  };
}

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
