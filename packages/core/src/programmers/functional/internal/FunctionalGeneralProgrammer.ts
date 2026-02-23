import ts from "typescript";

import { TypeFactory } from "../../../factories/TypeFactory";

export namespace FunctionalGeneralProgrammer {
  export interface IProps {
    checker: ts.TypeChecker;
    declaration: ts.FunctionDeclaration | ts.SignatureDeclaration;
  }
  export interface IOutput {
    type: ts.Type;
    async: boolean;
  }
  export const getReturnType = (props: IProps): IOutput => {
    const signature: ts.Signature | undefined =
      props.checker.getSignatureFromDeclaration(props.declaration);
    const type: ts.Type =
      signature?.getReturnType() ??
      props.checker.getTypeFromTypeNode(TypeFactory.keyword("any"));

    if (type.symbol?.name === "Promise") {
      const generic: readonly ts.Type[] = props.checker.getTypeArguments(
        type as ts.TypeReference,
      );
      return generic.length === 1
        ? { type: generic[0]!, async: true }
        : {
            type: props.checker.getTypeFromTypeNode(TypeFactory.keyword("any")),
            async: false,
          };
    }
    return { type, async: false };
  };
}
