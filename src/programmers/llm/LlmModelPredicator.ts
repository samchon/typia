import { ILlmSchema } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/lib/composers/LlmSchemaComposer";
import ts from "typescript";

import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { ValidationPipe } from "../../typings/ValidationPipe";

export namespace LlmModelPredicator {
  export const getConfig = (props: {
    context: ITypiaContext;
    method: string;
    model: ILlmSchema.Model;
    node: ts.TypeNode | undefined;
  }):
    | Partial<
        ILlmSchema.ModelConfig[ILlmSchema.Model] & {
          equals: boolean;
        }
      >
    | undefined => {
    if (props.node === undefined) return undefined;
    const type: ts.Type = props.context.checker.getTypeFromTypeNode(props.node);
    const collection: MetadataCollection = new MetadataCollection();
    const result: ValidationPipe<Metadata, MetadataFactory.IError> =
      MetadataFactory.analyze({
        checker: props.context.checker,
        transformer: props.context.transformer,
        options: {
          absorb: true,
          escape: false,
          constant: true,
          functional: false,
        },
        collection,
        type,
      });
    if (result.success === false)
      throw new TransformerError({
        code: `typia.llm.${props.method}`,
        message: `Failed to analyze generic argument "Config".`,
      });

    const meta: Metadata = result.data;
    if (
      meta.size() !== 1 ||
      meta.objects.length !== 1 ||
      meta.nullable === true ||
      meta.isRequired() === false
    )
      throw new TransformerError({
        code: `typia.llm.${props.method}`,
        message: `Invalid generic argument "Config". It must be a literal object type.`,
      });

    const obj: MetadataObject = meta.objects[0]!;
    if (obj.type.properties.some((p) => p.key.isSoleLiteral() === false))
      throw new TransformerError({
        code: `typia.llm.${props.method}`,
        message: `Invalid generic argument "Config". It must be a literal object type. Do not allow dynamic properties.`,
      });
    else if (
      obj.type.properties.some(
        (p) =>
          p.value.size() !== 1 ||
          p.value.constants.length !== 1 ||
          p.value.nullable === true ||
          p.value.isRequired() === false,
      )
    )
      throw new TransformerError({
        code: `typia.llm.${props.method}`,
        message: `Invalid generic argument "Config". It must be a literal object type. Do not allow variable type.`,
      });
    const config: Partial<ILlmSchema.ModelConfig[ILlmSchema.Model]> = {};
    for (const prop of obj.type.properties) {
      const key: string = prop.key.getSoleLiteral()!;
      const value: boolean | bigint | number | string =
        prop.value.constants[0]!.values[0]!.value;
      if (typeof value === "bigint")
        throw new TransformerError({
          code: `typia.llm.${props.method}`,
          message: `Invalid generic argument "Config". It must be a literal object type. Do not allow bigint.`,
        });
      (config as any)[key] = value;
    }
    return config;
  };

  export const getModel = (props: {
    checker: ts.TypeChecker;
    method: string;
    node: ts.TypeNode | undefined;
  }): ILlmSchema.Model => {
    if (props.node === undefined)
      throw new TransformerError({
        code: `typia.llm.${props.method}`,
        message: `generic argument "Model" must be specified.`,
      });

    // CHECK LITERAL TYPE
    const type: ts.Type = props.checker.getTypeFromTypeNode(props.node);
    if (
      !type.isLiteral() &&
      (type.getFlags() & ts.TypeFlags.BooleanLiteral) === 0
    )
      throw new TransformerError({
        code: `typia.llm.${props.method}`,
        message: `generic argument "Model" must be constant.`,
      });

    // GET VALUE AND VALIDATE IT
    const value = type.isLiteral()
      ? type.value
      : props.checker.typeToString(type);
    if (
      typeof value !== "string" ||
      LlmSchemaComposer.defaultConfig(value as "3.0") === undefined
    )
      throw new TransformerError({
        code: "typia.llm.schema",
        message: `invalid value on generic argument "Model".`,
      });
    return value as ILlmSchema.Model;
  };
}
