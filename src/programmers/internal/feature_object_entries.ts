import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { MetadataObject } from "../../schemas/metadata/MetadataObject";

import { Escaper } from "../../utils/Escaper";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";

/**
 * @internal
 */
export const feature_object_entries = <Output extends ts.ConciseBody>(props: {
  config: Pick<FeatureProgrammer.IConfig<Output>, "decoder" | "path" | "trace">;
  functor: FunctionProgrammer;
  object: MetadataObject;
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
                  props.functor.use("join");
                  return `$join(key)`;
                })()
            : "",
        },
      }),
    };
  });
