import ts from "typescript";

import { IsProgrammer } from "../../programmers/IsProgrammer";

import { ITransformProps } from "../ITransformProps";
import { GenericTransformer } from "../internal/GenericTransformer";

export namespace CreateIsShallowTransformer {
  export const transform =
    (config: IsProgrammer.IConfig) => (props: ITransformProps) => {
      // Extract maxDepth from first argument if provided
      const maxDepthArg = props.expression.arguments?.[0];
      const maxDepth = maxDepthArg
        ? ts.isNumericLiteral(maxDepthArg)
          ? parseInt(maxDepthArg.text, 10)
          : 2 // default if not a literal
        : 2; // default if not provided

      return GenericTransformer.factory({
        ...props,
        method: "isShallow",
        write: (x) =>
          IsProgrammer.write({
            ...x,
            config: {
              ...config,
              maxDepth,
            },
          }),
      });
    };
}
