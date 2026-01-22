import ts from "typescript";

import { ImportProgrammer } from "../programmers/ImportProgrammer";

import { _randomFormatUuid } from "../internal/_randomFormatUuid";

export namespace ExpressionFactory {
  export const number = (value: number) =>
    value < 0
      ? ts.factory.createPrefixUnaryExpression(
          ts.SyntaxKind.MinusToken,
          ts.factory.createNumericLiteral(Math.abs(value)),
        )
      : ts.factory.createNumericLiteral(value);

  export const bigint = (value: number | bigint) =>
    ts.factory.createCallExpression(
      ts.factory.createIdentifier("BigInt"),
      undefined,
      [ts.factory.createIdentifier(value.toString())],
    );

  export const isRequired = (input: ts.Expression): ts.Expression =>
    ts.factory.createStrictInequality(
      ts.factory.createIdentifier("undefined"),
      input,
    );

  export const isArray = (input: ts.Expression): ts.Expression =>
    ts.factory.createCallExpression(
      ts.factory.createIdentifier("Array.isArray"),
      undefined,
      [input],
    );

  export const isObject = (props: {
    checkNull: boolean;
    checkArray: boolean;
    input: ts.Expression;
  }): ts.Expression => {
    const conditions: ts.Expression[] = [
      ts.factory.createStrictEquality(
        ts.factory.createStringLiteral("object"),
        ts.factory.createTypeOfExpression(props.input),
      ),
    ];
    if (props.checkNull === true)
      conditions.push(
        ts.factory.createStrictInequality(ts.factory.createNull(), props.input),
      );
    if (props.checkArray === true)
      conditions.push(
        ts.factory.createStrictEquality(
          ts.factory.createFalse(),
          ts.factory.createCallExpression(
            ts.factory.createIdentifier("Array.isArray"),
            undefined,
            [props.input],
          ),
        ),
      );

    return conditions.length === 1
      ? conditions[0]!
      : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
  };

  export const isInstanceOf = (
    type: string,
    input: ts.Expression,
  ): ts.Expression => {
    return ts.factory.createBinaryExpression(
      input,
      ts.factory.createToken(ts.SyntaxKind.InstanceOfKeyword),
      ts.factory.createIdentifier(type),
    );
  };

  export const coalesce = (x: ts.Expression, y: ts.Expression): ts.Expression =>
    ts.factory.createBinaryExpression(
      x,
      ts.factory.createToken(ts.SyntaxKind.QuestionQuestionToken),
      y,
    );

  export const currying = (props: {
    function: ts.Expression;
    arguments: ts.Expression[];
  }): ts.CallExpression => {
    if (props.arguments.length === 0)
      return ts.factory.createCallExpression(
        props.function,
        undefined,
        undefined,
      );
    let prev: ts.CallExpression = ts.factory.createCallExpression(
      props.function,
      undefined,
      [props.arguments[0]!],
    );
    for (const param of props.arguments.slice(1))
      prev = ts.factory.createCallExpression(prev, undefined, [param]);
    return prev;
  };

  export const selfCall = (
    body: ts.ConciseBody,
    type?: ts.TypeNode | undefined,
  ) =>
    ts.isCallExpression(body)
      ? body
      : ts.factory.createCallExpression(
          ts.factory.createParenthesizedExpression(
            ts.factory.createArrowFunction(
              undefined,
              undefined,
              [],
              type,
              undefined,
              body,
            ),
          ),
          undefined,
          undefined,
        );

  export const getEscapedText = (props: {
    printer: ts.Printer;
    input: ts.Expression;
  }): string =>
    props.printer.printNode(
      ts.EmitHint.Expression,
      props.input,
      props.input.getSourceFile(),
    );

  export const transpile = (props: {
    transformer?: ts.TransformationContext;
    importer?: ImportProgrammer;
    script: string;
  }) => {
    const file: ts.SourceFile = ts.createSourceFile(
      `${_randomFormatUuid()}.ts`,
      props.script,
      ts.ScriptTarget.ESNext,
      true,
      ts.ScriptKind.TS,
    );
    const statement: ts.Statement | undefined = file.statements[0];
    if (statement === undefined)
      throw new ReferenceError(
        "Error on ExpressionFactory.transpile(): no statement exists.",
      );
    else if (!ts.isExpressionStatement(statement))
      throw new TypeError(
        "Error on ExpressionFactory.transpile(): statement is not an expression statement.",
      );
    return (input: ts.Expression): ts.Expression => {
      const visitor = (node: ts.Node): ts.Node => {
        if (ts.isIdentifier(node) && node.text === "$input") return input;
        else if (props.importer !== undefined && ts.isCallExpression(node))
          if (
            node.expression.getText() === "$importInternal" &&
            node.arguments.length === 1 &&
            ts.isStringLiteralLike(node.arguments[0]!)
          ) {
            const name: string = node.arguments[0]!.text;
            return props.importer.internal(name);
          } else if (
            node.expression.getText() === "$importInstance" &&
            node.arguments.length === 2 &&
            ts.isStringLiteralLike(node.arguments[0]!) &&
            ts.isStringLiteralLike(node.arguments[1]!)
          ) {
            const name: string = node.arguments[0]!.text;
            const file: string = node.arguments[1]!.text;
            return props.importer.instance({
              file,
              name,
              alias: null,
            });
          } else if (
            node.expression.getText() === "$importNamespace" &&
            node.arguments.length === 2 &&
            ts.isStringLiteralLike(node.arguments[0]!) &&
            ts.isStringLiteralLike(node.arguments[1]!)
          ) {
            const name: string = node.arguments[0]!.text;
            const file: string = node.arguments[1]!.text;
            return props.importer.namespace({
              file,
              name,
            });
          } else if (
            node.expression.getText() === "$importDefault" &&
            node.arguments.length === 3 &&
            ts.isStringLiteralLike(node.arguments[0]!) &&
            ts.isStringLiteralLike(node.arguments[1]!)
          ) {
            const name: string = node.arguments[0]!.text;
            const file: string = node.arguments[1]!.text;
            return props.importer.default({
              file,
              name,
              type: false,
            });
          }
        return ts.visitEachChild(
          ts.factory.cloneNode(node),
          visitor,
          props.transformer,
        );
      };
      return visitor(
        ts.factory.cloneNode(statement.expression),
      ) as ts.Expression;
    };
  };
}
