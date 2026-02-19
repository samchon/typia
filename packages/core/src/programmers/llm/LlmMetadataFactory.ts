import { ILlmSchema } from "@typia/interface";
import ts from "typescript";

import { ITypiaContext } from "../../context/ITypiaContext";
import { TransformerError } from "../../context/TransformerError";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { MetadataStorage } from "../../factories/MetadataStorage";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataSchema } from "../../schemas/metadata/MetadataSchema";
import { ValidationPipe } from "../../typings/ValidationPipe";

export namespace LlmMetadataFactory {
  export const getConfig = (props: {
    context: ITypiaContext;
    method: string;
    node: ts.TypeNode | undefined;
  }):
    | Partial<
        ILlmSchema.IConfig & {
          equals: boolean;
        }
      >
    | undefined => {
    if (props.node === undefined) return undefined;

    const type: ts.Type = props.context.checker.getTypeFromTypeNode(props.node);
    const collection: MetadataStorage = new MetadataStorage();
    const result: ValidationPipe<MetadataSchema, MetadataFactory.IError> =
      MetadataFactory.analyze({
        checker: props.context.checker,
        transformer: props.context.transformer,
        options: {
          absorb: true,
          escape: false,
          constant: true,
          functional: false,
        },
        components: collection,
        type,
      });
    if (result.success === false)
      throw new TransformerError({
        code: `typia.llm.${props.method}`,
        message: `Failed to analyze generic argument "Config".`,
      });

    const meta: MetadataSchema = result.data;
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
    const config: Partial<ILlmSchema.IConfig> = {};
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
}
