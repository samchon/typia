import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { ITypiaContext } from "../../transformers/ITypiaContext";

import { StringUtil } from "../../utils/StringUtil";

import { AssertProgrammer } from "../AssertProgrammer";
import { FunctionalAssertParametersProgrammer } from "./FunctionalAssertParametersProgrammer";
import { FunctionAssertReturnProgrammer } from "./FunctionalAssertReturnProgrammer";

export namespace FunctionalAssertFunctionProgrammer {
  export interface IConfig {
    equals: boolean;
  }
  export interface IProps {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    config: IConfig;
    declaration: ts.FunctionDeclaration;
    expression: ts.Expression;
    init?: ts.Expression | undefined;
  }

  export const write = (props: IProps): ts.CallExpression => {
    const wrapper = errorFactoryWrapper({
      context: props.context,
      parameters: props.declaration.parameters,
      init: props.init,
    });
    const p = FunctionalAssertParametersProgrammer.decompose({
      context: props.context,
      modulo: props.modulo,
      config: props.config,
      parameters: props.declaration.parameters,
      wrapper: wrapper.name,
    });
    const r = FunctionAssertReturnProgrammer.decompose({
      context: props.context,
      modulo: props.modulo,
      config: props.config,
      expression: props.expression,
      declaration: props.declaration,
      wrapper: wrapper.name,
    });
    return ExpressionFactory.selfCall(
      ts.factory.createBlock(
        [
          wrapper.variable,
          ...p.functions,
          ...r.functions,
          ts.factory.createReturnStatement(
            ts.factory.createArrowFunction(
              r.async
                ? [ts.factory.createModifier(ts.SyntaxKind.AsyncKeyword)]
                : undefined,
              undefined,
              props.declaration.parameters,
              props.declaration.type,
              undefined,
              ts.factory.createBlock([
                ...p.expressions.map(ts.factory.createExpressionStatement),
                ts.factory.createReturnStatement(r.value),
              ]),
            ),
          ),
        ],
        true,
      ),
    );
  };

  export const errorFactoryWrapper = (props: {
    context: ITypiaContext;
    parameters: readonly ts.ParameterDeclaration[];
    init: ts.Expression | undefined;
  }): {
    name: string;
    variable: ts.VariableStatement;
  } => {
    const name: string = StringUtil.escapeDuplicate({
      keep: props.parameters.map((p) => p.name.getText()),
      input: "errorFactoryWrapper",
    });
    const variable: ts.VariableStatement = ts.factory.createVariableStatement(
      undefined,
      ts.factory.createVariableDeclarationList(
        [
          ts.factory.createVariableDeclaration(
            name,
            undefined,
            AssertProgrammer.Guardian.type(props.context),
            props.init ??
              props.context.importer.internal(
                "functionalTypeGuardErrorFactory",
              ),
          ),
        ],
        ts.NodeFlags.Const,
      ),
    );
    return { name, variable };
  };

  export const hookPath = (props: {
    wrapper: string;
    replacer: string;
  }): ts.ArrowFunction =>
    ts.factory.createArrowFunction(
      undefined,
      undefined,
      [IdentifierFactory.parameter("p")],
      undefined,
      undefined,
      ts.factory.createCallExpression(
        ts.factory.createIdentifier(props.wrapper),
        undefined,
        [
          ts.factory.createObjectLiteralExpression([
            ts.factory.createSpreadAssignment(ts.factory.createIdentifier("p")),
            ts.factory.createPropertyAssignment(
              "path",
              ts.factory.createConditionalExpression(
                ts.factory.createPropertyAccessExpression(
                  ts.factory.createIdentifier("p"),
                  "path",
                ),
                undefined,
                ts.factory.createCallExpression(
                  ts.factory.createPropertyAccessExpression(
                    ts.factory.createPropertyAccessExpression(
                      ts.factory.createIdentifier("p"),
                      "path",
                    ),
                    "replace",
                  ),
                  undefined,
                  [
                    ts.factory.createStringLiteral("$input"),
                    ts.factory.createStringLiteral(props.replacer),
                  ],
                ),
                undefined,
                ts.factory.createIdentifier("undefined"),
              ),
            ),
          ]),
        ],
      ),
    );
}
