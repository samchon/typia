import { ILlmApplication, ILlmSchema } from "@samchon/openapi";
import ts from "typescript";

import { ILlmApplicationOfValidate } from "../../schemas/llm/ILlmApplicationOfValidate";
import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataParameter } from "../../schemas/metadata/MetadataParameter";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { IValidation } from "../../IValidation";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { LlmApplicationProgrammer } from "./LlmApplicationProgrammer";

export namespace LlmApplicationOfValidateProgrammer {
  export const validate = (model: ILlmSchema.Model) =>
    LlmApplicationProgrammer.validate(model);

  export const write = <Model extends ILlmSchema.Model>(props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    model: Model;
    metadata: Metadata;
    config?: Partial<ILlmSchema.ModelConfig[Model]>;
  }): ILlmApplicationOfValidate<Model> => {
    const app: ILlmApplication<Model> = LlmApplicationProgrammer.write(props);
    const parameters: Record<string, MetadataParameter> = Object.fromEntries(
      props.metadata.objects[0]!.type.properties.filter(
        (p) =>
          p.key.isSoleLiteral() &&
          p.value.size() === 1 &&
          p.value.nullable === false &&
          p.value.isRequired() === true &&
          p.value.functions.length === 1,
      )
        .filter(
          (p) =>
            p.jsDocTags.find(
              (tag) => tag.name === "hidden" || tag.name === "internal",
            ) === undefined,
        )
        .map((p) => [
          p.key.getSoleLiteral()!,
          p.value.functions[0]!.parameters[0]!,
        ]),
    );
    return {
      ...app,
      functions: app.functions.map((func) => ({
        ...func,
        validate: writeValidadtor({
          context: props.context,
          modulo: props.modulo,
          parameter: parameters[func.name]!,
        }),
      })),
    };
  };

  const writeValidadtor = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    parameter: MetadataParameter;
  }): ((props: object) => IValidation<unknown>) => {
    const type = props.parameter.tsType;
    if (type === undefined)
      // unreachable
      throw new Error(
        "Failed to write LLM application's function validator. You don't have to call `LlmApplicationOfValidator.write()` function by yourself, but only by the `typia.llm.applicationOfValidate()` function.",
      );
    return ValidateProgrammer.write({
      ...props,
      type: props.parameter.tsType!,
      config: {
        equals: false,
      },
      name: undefined,
    }) satisfies ts.CallExpression as any as (
      props: object,
    ) => IValidation<unknown>;
  };
}
