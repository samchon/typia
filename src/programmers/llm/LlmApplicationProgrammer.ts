import {
  ILlmApplication,
  ILlmSchema,
  IOpenApiSchemaError,
  IResult,
  OpenApi,
} from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/lib/composers/LlmSchemaComposer";
import { ILlmFunction } from "@samchon/openapi/lib/structures/ILlmFunction";

import { MetadataFactory } from "../../factories/MetadataFactory";

import { __IJsonApplication } from "../../schemas/json/__IJsonApplication";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataFunction } from "../../schemas/metadata/MetadataFunction";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";

import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { LlmSchemaProgrammer } from "./LlmSchemaProgrammer";

export namespace LlmApplicationProgrammer {
  export const validate = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    config?: Partial<ILlmSchema.ModelConfig[Model]>;
  }) => {
    let top: Metadata | undefined;
    return (
      metadata: Metadata,
      explore: MetadataFactory.IExplore,
    ): string[] => {
      top ??= metadata;
      if (explore.top === false)
        if (
          explore.object === top?.objects[0]?.type &&
          typeof explore.property === "string" &&
          metadata.size() === 1 &&
          metadata.nullable === false &&
          metadata.isRequired() === true &&
          metadata.functions.length === 1
        )
          return validateFunction(explore.property, metadata.functions[0]!);
        else return LlmSchemaProgrammer.validate(props)(metadata);

      const output: string[] = [];
      const validity: boolean =
        metadata.size() === 1 &&
        metadata.objects.length === 1 &&
        metadata.isRequired() === true &&
        metadata.nullable === false;
      if (validity === false)
        output.push(
          "LLM application's generic argument must be a class/interface type.",
        );

      const object: MetadataObjectType | undefined = metadata.objects[0]?.type;
      if (object !== undefined) {
        if (object.properties.some((p) => p.key.isSoleLiteral() === false))
          output.push(
            "LLM application does not allow dynamic keys on class/interface type.",
          );
        let least: boolean = false;
        for (const p of object.properties) {
          const name: string = JSON.stringify(p.key.getSoleLiteral()!);
          const value: Metadata = p.value;
          if (value.functions.length) {
            least ||= true;
            if (validity === false) {
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

            const description: string | undefined = concatDescription(
              JsonApplicationProgrammer.writeDescription({
                description:
                  p.description ??
                  p.jsDocTags.find((tag) => tag.name === "description")
                    ?.text?.[0]?.text ??
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
  };

  const validateFunction = (name: string, func: MetadataFunction): string[] => {
    const output: string[] = [];
    const prefix: string = `LLM application's function (${JSON.stringify(name)})`;
    if (func.output.size() && func.output.isRequired() === false)
      output.push(
        `${prefix}'s return type must not be union type with undefined.`,
      );
    if (/^[0-9]/.test(name[0] ?? "") === true)
      output.push(`${prefix} name must not start with a number.`);
    if (/^[a-zA-Z0-9_-]+$/.test(name) === false)
      output.push(
        `${prefix} name must be alphanumeric with underscore or hyphen.`,
      );
    if (name.length > 64)
      output.push(`${prefix} name must not exceed 64 characters.`);
    if (func.parameters.length !== 0 && func.parameters.length !== 1)
      output.push(`${prefix} must have a single parameter.`);
    if (func.parameters.length !== 0) {
      const type: Metadata = func.parameters[0]!.type;
      if (type.size() !== 1 || type.objects.length !== 1)
        output.push(`${prefix}'s parameter must be an object type.`);
      else {
        if (
          type.objects[0]!.type.properties.some(
            (p) => p.key.isSoleLiteral() === false,
          )
        )
          output.push(`${prefix}'s parameter must not have dynamic keys.`);
        if (type.isRequired() === false)
          output.push(
            `${prefix}'s parameter must not be union type with undefined.`,
          );
        if (type.nullable === true)
          output.push(`${prefix}'s parameter must not be nullable.`);
      }
    }
    return output;
  };

  export const write = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    metadata: Metadata;
    config?: Partial<ILlmSchema.ModelConfig[Model]>;
  }): ILlmApplication<Model> => {
    const errors: string[] = validate(props)(props.metadata, {
      top: true,
      object: null,
      property: null,
      parameter: null,
      nested: null,
      aliased: false,
      escaped: false,
      output: false,
    });
    if (errors.length)
      throw new Error("Failed to write LLM application: " + errors.join("\n"));

    const errorMessages: string[] = [];
    const application: __IJsonApplication<"3.1"> =
      JsonApplicationProgrammer.write({
        version: "3.1",
        metadata: props.metadata,
        filter: (p) =>
          p.jsDocTags.some((tag) => tag.name === "human") === false,
      });
    const functions: Array<ILlmFunction<Model> | null> =
      application.functions.map((func) =>
        writeFunction({
          model: props.model,
          components: application.components,
          function: func,
          errors: errorMessages,
        }),
      );
    if (functions.some((func) => func === null))
      throw new Error(
        "Failed to write LLM application:\n\n" +
          errorMessages.map((str) => `  - ${str}`).join("\n"),
      );
    return {
      model: props.model,
      options: {
        ...LlmSchemaComposer.defaultConfig(props.model),
        ...props.config,
        separate: null,
      },
      functions: functions as ILlmFunction<Model>[],
    };
  };

  const writeFunction = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    components: OpenApi.IComponents;
    function: __IJsonApplication.IFunction<OpenApi.IJsonSchema>;
    errors: string[];
  }): ILlmFunction<Model> | null => {
    const parameters: ILlmSchema.ModelParameters[Model] | null =
      writeParameters({
        ...props,
        accessor: `$input.${props.function.name}.parameters`,
      });
    if (parameters === null) return null;
    const output: ILlmSchema.ModelSchema[Model] | null | undefined =
      writeOutput({
        model: props.model,
        parameters,
        components: props.components,
        schema: props.function.output?.schema ?? null,
        errors: props.errors,
        accessor: `$input.${props.function.name}.output`,
      });
    if (output === null) return null;
    else if (
      output &&
      output.description === undefined &&
      !!props.function.output?.description?.length
    )
      output.description = props.function.output.description;
    return {
      name: props.function.name,
      parameters,
      output: (output ?? undefined) as
        | ILlmSchema.ModelSchema[Model]
        | undefined,
      description: (() => {
        if (
          !props.function.summary?.length ||
          !props.function.description?.length
        )
          return props.function.summary || props.function.description;
        const summary: string = props.function.summary.endsWith(".")
          ? props.function.summary.slice(0, -1)
          : props.function.summary;
        return props.function.description.startsWith(summary)
          ? props.function.description
          : summary + ".\n\n" + props.function.description;
      })(),
      deprecated: props.function.deprecated,
      tags: props.function.tags,
    };
  };

  const writeParameters = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    components: OpenApi.IComponents;
    function: __IJsonApplication.IFunction<OpenApi.IJsonSchema>;
    errors: string[];
    accessor: string;
  }): ILlmSchema.ModelParameters[Model] | null => {
    const schema = props.function.parameters[0]?.schema ?? {
      type: "object",
      properties: {},
      additionalProperties: false,
      required: [],
    };
    const result: IResult<
      ILlmSchema.ModelParameters[Model],
      IOpenApiSchemaError
    > = LlmSchemaComposer.parameters(props.model)({
      config: LlmSchemaComposer.defaultConfig(props.model) as any,
      components: props.components,
      schema: {
        ...(schema as
          | OpenApi.IJsonSchema.IObject
          | OpenApi.IJsonSchema.IReference),
        title: schema.title ?? props.function.parameters[0]?.title,
        description:
          schema.description ?? props.function.parameters[0]?.description,
      },
      accessor: props.accessor,
    }) as IResult<ILlmSchema.ModelParameters[Model], IOpenApiSchemaError>;
    if (result.success === false) {
      props.errors.push(
        ...result.error.reasons.map((r) => `  - ${r.accessor}: ${r.message}`),
      );
      return null;
    }
    return result.value;
  };

  const writeOutput = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    parameters: ILlmSchema.ModelParameters[Model];
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema | null;
    errors: string[];
    accessor: string;
  }): ILlmSchema.ModelSchema[Model] | null | undefined => {
    if (props.schema === null) return undefined;
    const result: IResult<ILlmSchema.ModelSchema[Model], IOpenApiSchemaError> =
      LlmSchemaComposer.schema(props.model)({
        config: LlmSchemaComposer.defaultConfig(props.model) as any,
        components: props.components,
        schema: props.schema,
        $defs: (props.parameters as any).$defs,
        accessor: props.accessor,
      }) as IResult<ILlmSchema.ModelSchema[Model], IOpenApiSchemaError>;
    if (result.success === false) {
      props.errors.push(
        ...result.error.reasons.map((r) => `  - ${r.accessor}: ${r.message}`),
      );
      return null;
    }
    return result.value;
  };

  const concatDescription = (p: {
    summary?: string | undefined;
    description?: string | undefined;
  }): string | undefined => {
    if (!p.summary?.length || !p.description?.length)
      return p.summary ?? p.description;
    const summary: string = p.summary.endsWith(".")
      ? p.summary.slice(0, -1)
      : p.summary;
    return p.description.startsWith(summary)
      ? p.description
      : summary + ".\n\n" + p.description;
  };
}
