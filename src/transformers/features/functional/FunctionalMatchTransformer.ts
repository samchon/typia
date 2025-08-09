import ts from "typescript";

import { MatchProgrammer } from "../../../programmers/MatchProgrammer";

import { ITransformProps } from "../../ITransformProps";
import { TransformerError } from "../../TransformerError";

export namespace FunctionalMatchTransformer {
  export const transform = (props: ITransformProps): ts.Expression => {
    // CHECK PARAMETER COUNT
    if (props.expression.arguments.length < 2)
      throw new TransformerError({
        code: `typia.functional.match`,
        message: `at least 2 arguments required: input and cases.`,
      });

    const input = props.expression.arguments[0]!;
    const cases = props.expression.arguments[1]!;
    const otherwise = props.expression.arguments[2];

    // GET TYPE INFO
    const inputType: ts.Type = 
      props.expression.typeArguments && props.expression.typeArguments[0]
        ? props.context.checker.getTypeFromTypeNode(
            props.expression.typeArguments[0],
          )
        : props.context.checker.getTypeAtLocation(input);

    // Use MatchProgrammer to generate optimized conditional statements
    return MatchProgrammer.write({
      ...props,
      input,
      cases,
      otherwise,
      inputType,
      type: inputType,
      name: undefined,
    });
  };
}