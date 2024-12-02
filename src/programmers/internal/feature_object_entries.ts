import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { MetadataObjectType } from "../../schemas/metadata/MetadataObjectType";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { Escaper } from "../../utils/Escaper";

import { FeatureProgrammer } from "../FeatureProgrammer";

/**
 * @internal
 */
export const feature_object_entries = <Output extends ts.ConciseBody>(props: {
  config: Pick<FeatureProgrammer.IConfig<Output>, "decoder" | "path" | "trace">;
  context: ITypiaContext;
  object: MetadataObjectType;
  input: ts.Expression;
  from?: "object" | "top" | "array";
}) =>
  props.object.properties.map((next) => {
    const sole: string | null = next.key.getSoleLiteral();
    const propInput =
      sole === null
        ? ts.factory.createIdentifier("value")
        : Escaper.variable(sole)
          ? ts.factory.createPropertyAccessExpression(
              props.input,
              ts.factory.createIdentifier(sole),
            )
          : ts.factory.createElementAccessExpression(
              props.input,
              ts.factory.createStringLiteral(sole),
            );
    return {
      input: propInput,
      key: next.key,
      meta: next.value,
      expression: props.config.decoder({
        input: propInput,
        metadata: next.value,
        explore: {
          tracable: props.config.path || props.config.trace,
          source: "function",
          from: props.from ?? "object",
          postfix: props.config.trace
            ? sole !== null
              ? IdentifierFactory.postfix(sole)
              : (() => {
                  props.context.importer.internal(ACCESSOR);
                  return `${props.context.importer.getInternalText(ACCESSOR)}(key)`;
                })()
            : "",
        },
      }),
    };
  });

const ACCESSOR = "accessExpressionAsString";
