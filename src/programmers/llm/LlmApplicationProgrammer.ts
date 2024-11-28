import { ILlmApplication, ILlmSchema, OpenApi } from "@samchon/openapi";
import { LlmSchemaConverter } from "@samchon/openapi/lib/converters/LlmSchemaConverter";
import { ILlmFunction } from "@samchon/openapi/lib/structures/ILlmFunction";

import { MetadataFactory } from "../../factories/MetadataFactory";

import { __IJsonApplication } from "../../schemas/json/__IJsonApplication";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataFunction } from "../../schemas/metadata/MetadataFunction";
import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";

import { JsonApplicationProgrammer } from "../json/JsonApplicationProgrammer";
import { LlmSchemaProgrammer } from "./LlmSchemaProgrammer";

export namespace LlmApplicationProgrammer {
  export const validate = (model: ILlmSchema.Model) => {
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
        else return LlmSchemaProgrammer.validate(model)(metadata);

      const output: string[] = [];
      const valid: boolean =
        metadata.size() === 1 &&
        metadata.objects.length === 1 &&
        metadata.isRequired() === true &&
        metadata.nullable === false;
      if (valid === false)
        output.push(
          "LLM application's generic arugment must be a class/interface type.",
        );

      const object: MetadataObjectType | undefined = metadata.objects[0]?.type;
      if (object !== undefined) {
        if (object.properties.some((p) => p.key.isSoleLiteral() === false))
          output.push(
            "LLM application does not allow dynamic keys on class/interface type.",
          );
        let least: boolean = false;
        for (const p of object.properties) {
          const value: Metadata = p.value;
          if (value.functions.length) {
            least ||= true;
            if (valid === false) {
              if (value.functions.length !== 1 || value.size() !== 1)
                output.push(
                  "LLM application's function type does not allow union type.",
                );
              if (value.isRequired() === false)
                output.push(
                  "LLM application's function type must be required.",
                );
              if (value.nullable === true)
                output.push(
                  "LLM application's function type must not be nullable.",
                );
            }
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
    if (func.parameters.length !== 1)
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
    const errors: string[] = validate(props.model)(props.metadata, {
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

    const application: __IJsonApplication<"3.1"> =
      JsonApplicationProgrammer.write({
        version: "3.1",
        metadata: props.metadata,
      });
    return {
      model: props.model,
      options: {
        ...LlmSchemaConverter.defaultConfig(props.model),
        ...props.config,
        separate: null,
      },
      functions: application.functions.map((func) =>
        writeFunction({
          model: props.model,
          components: application.components,
          function: func,
        }),
      ),
    };
  };

  const writeFunction = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    components: OpenApi.IComponents;
    function: __IJsonApplication.IFunction<OpenApi.IJsonSchema>;
  }): ILlmFunction<Model> => {
    const parameters: ILlmSchema.ModelParameters[Model] =
      writeParameters(props);
    const output: ILlmSchema.ModelSchema[Model] | null = writeOutput({
      model: props.model,
      parameters,
      components: props.components,
      schema: props.function.output?.schema ?? null,
    });
    if (
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
      strict: true,
    };
  };

  const writeParameters = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    components: OpenApi.IComponents;
    function: __IJsonApplication.IFunction<OpenApi.IJsonSchema>;
  }): ILlmSchema.ModelParameters[Model] => {
    const schema: OpenApi.IJsonSchema.IObject = {
      type: "object",
      properties: Object.fromEntries(
        props.function.parameters.map((p) => [
          p.name,
          {
            ...p.schema,
            title: p.title ?? p.schema.title,
            description: p.description ?? p.schema.description,
          },
        ]),
      ),
      required: props.function.parameters
        .filter((p) => p.required)
        .map((p) => p.name),
      additionalProperties: false,
    };
    const parameters: ILlmSchema.ModelParameters[Model] | null =
      LlmSchemaConverter.parameters(props.model)({
        config: LlmSchemaConverter.defaultConfig(props.model) as any,
        components: props.components,
        schema,
      }) as ILlmSchema.ModelParameters[Model] | null;
    if (parameters === null)
      throw new Error("Failed to write LLM application parameters.");
    return parameters;
  };

  const writeOutput = <Model extends ILlmSchema.Model>(props: {
    model: Model;
    parameters: ILlmSchema.ModelParameters[Model];
    components: OpenApi.IComponents;
    schema: OpenApi.IJsonSchema | null;
  }): ILlmSchema.ModelSchema[Model] | null => {
    if (props.schema === null) return null;
    const output: ILlmSchema.ModelSchema[Model] | null =
      LlmSchemaConverter.schema(props.model)({
        config: LlmSchemaConverter.defaultConfig(props.model) as any,
        components: props.components,
        schema: props.schema,
        $defs: (props.parameters as any).$defs,
      }) as ILlmSchema.ModelSchema[Model] | null;
    if (output === null)
      throw new Error("Failed to write LLM application output.");
    return output;
  };
}
