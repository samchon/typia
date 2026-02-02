import ts from "typescript";

import { Escaper } from "../utils/Escaper";

import { TypeFactory } from "./TypeFactory";

export namespace IdentifierFactory {
  export const identifier = (name: string) =>
    Escaper.variable(name)
      ? ts.factory.createIdentifier(name)
      : ts.factory.createStringLiteral(name);

  export const access = (
    input: ts.Expression,
    key: string,
    chain?: boolean,
  ) => {
    const postfix = identifier(key);
    return ts.isStringLiteral(postfix)
      ? chain === true
        ? ts.factory.createElementAccessChain(
            input,
            ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
            postfix,
          )
        : ts.factory.createElementAccessExpression(input, postfix)
      : chain === true
        ? ts.factory.createPropertyAccessChain(
            input,
            ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
            postfix,
          )
        : ts.factory.createPropertyAccessExpression(input, postfix);
  };

  export const getName = (input: ts.Expression): string => {
    const value: any = (input as any).escapedText?.toString();
    if (typeof value === "string") return value;

    if (ts.isPropertyAccessExpression(input))
      return `${getName(
        input.expression,
      )}.${input.name.escapedText.toString()}`;
    else if (ts.isElementAccessExpression(input))
      return `${getName(input.expression)}[${getName(
        input.argumentExpression,
      )}]`;
    return "unknown";
  };

  export const postfix = (str: string): string =>
    Escaper.variable(str)
      ? `".${str}"`
      : `"[${JSON.stringify(str).split('"').join('\\"')}]"`;

  export const parameter = (
    name: string | ts.BindingName,
    type?: ts.TypeNode | undefined,
    init?:
      | ts.Expression
      | ts.PunctuationToken<ts.SyntaxKind.QuestionToken>
      | undefined,
  ): ts.ParameterDeclaration => {
    // instead of ts.version >= "4.8"
    if (ts.getDecorators !== undefined)
      return ts.factory.createParameterDeclaration(
        undefined,
        undefined,
        name,
        init?.kind === ts.SyntaxKind.QuestionToken
          ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
          : undefined,
        type ?? TypeFactory.keyword("any"),
        init && init.kind !== ts.SyntaxKind.QuestionToken ? init : undefined,
      );
    // eslint-disable-next-line
    return (ts.factory.createParameterDeclaration as any)(
      undefined,
      undefined,
      undefined,
      name,
      init?.kind === ts.SyntaxKind.QuestionToken
        ? ts.factory.createToken(ts.SyntaxKind.QuestionToken)
        : undefined,
      type,
      init && init.kind !== ts.SyntaxKind.QuestionToken ? init : undefined,
    );
  };
}
