import ts from "typescript";

import { TypeFactory } from "../../../factories/TypeFactory";

export namespace FunctionalGeneralProgrammer {
  export interface IOutput {
    type: ts.Type;
    async: boolean;
  }
  export const getReturnType =
    (checker: ts.TypeChecker) =>
    (
      declaration: ts.FunctionDeclaration | ts.SignatureDeclaration,
    ): IOutput => {
      const signature: ts.Signature | undefined =
        checker.getSignatureFromDeclaration(declaration);
      const type: ts.Type =
        signature?.getReturnType() ??
        checker.getTypeFromTypeNode(TypeFactory.keyword("any"));

      if (type.symbol?.name === "Promise") {
        const generic: readonly ts.Type[] = checker.getTypeArguments(
          type as ts.TypeReference,
        );
        return generic.length === 1
          ? { type: generic[0]!, async: true }
          : {
              type: checker.getTypeFromTypeNode(TypeFactory.keyword("any")),
              async: false,
            };
      }
      return { type, async: false };
    };
}
