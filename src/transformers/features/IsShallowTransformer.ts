import ts from "typescript";

import { IsProgrammer } from "../../programmers/IsProgrammer";

import { ITransformProps } from "../ITransformProps";
import { GenericTransformer } from "../internal/GenericTransformer";

export namespace IsShallowTransformer {
  export const transform =
    (config: IsProgrammer.IConfig) => (props: ITransformProps) => {
      // Extract maxDepth from second argument if provided
      const maxDepthArg = props.expression.arguments?.[1];
      const maxDepth = maxDepthArg
        ? ts.isNumericLiteral(maxDepthArg)
          ? parseInt(maxDepthArg.text, 10)
          : 2 // default if not a literal
        : 2; // default if not provided

      return GenericTransformer.scalar({
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
