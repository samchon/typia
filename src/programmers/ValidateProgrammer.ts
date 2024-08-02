import ts from "typescript";

import { ExpressionFactory } from "../factories/ExpressionFactory";
import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FeatureProgrammer } from "./FeatureProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporter";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_everything } from "./internal/check_everything";
import { check_object } from "./internal/check_object";

export namespace ValidateProgrammer {
  export const decompose = (props: {
    project: IProject;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    equals: boolean;
    type: ts.Type;
    name?: string;
  }): FeatureProgrammer.IDecomposed => {
    const is: FeatureProgrammer.IDecomposed = IsProgrammer.decompose(props);
    const composed: FeatureProgrammer.IComposed = CheckerProgrammer.compose({
      ...props,
      config: {
        prefix: "$v",
        path: true,
        trace: true,
        numeric: OptionPredicator.numeric(props.project.options),
        equals: props.equals,
        atomist: (explore) => (entry) => (input) =>
          [
            ...(entry.expression ? [entry.expression] : []),
            ...(entry.conditions.length === 0
              ? []
              : entry.conditions.length === 1
                ? entry.conditions[0]!.map((cond) =>
                    ts.factory.createLogicalOr(
                      cond.expression,
                      create_report_call(
                        explore.from === "top"
                          ? ts.factory.createTrue()
                          : ts.factory.createIdentifier("_exceptionable"),
                      )(
                        ts.factory.createIdentifier(
                          explore.postfix
                            ? `_path + ${explore.postfix}`
                            : "_path",
                        ),
                        cond.expected,
                        input,
                      ),
                    ),
                  )
                : [
                    ts.factory.createLogicalOr(
                      entry.conditions
                        .map((set) =>
                          set
                            .map((s) => s.expression)
                            .reduce((a, b) =>
                              ts.factory.createLogicalAnd(a, b),
                            ),
                        )
                        .reduce((a, b) => ts.factory.createLogicalOr(a, b)),
                      create_report_call(
                        explore.from === "top"
                          ? ts.factory.createTrue()
                          : ts.factory.createIdentifier("_exceptionable"),
                      )(
                        ts.factory.createIdentifier(
                          explore.postfix
                            ? `_path + ${explore.postfix}`
                            : "_path",
                        ),
                        entry.expected,
                        input,
                      ),
                    ),
                  ]),
          ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
        combiner: combine(props.equals)(props.project)(props.importer),
        joiner: joiner(props.equals)(props.project)(props.importer),
        success: ts.factory.createTrue(),
      },
    });
    const arrow: ts.ArrowFunction = ts.factory.createArrowFunction(
      undefined,
      undefined,
      [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
      ts.factory.createTypeReferenceNode(
        `typia.IValidation<${
          props.name ??
          TypeFactory.getFullName(props.project.checker)(props.type)
        }>`,
      ),
      undefined,
      ts.factory.createBlock(
        [
          // errors.clear()
          ts.factory.createIfStatement(
            ts.factory.createIdentifier("errors.length"),
            ts.factory.createExpressionStatement(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("errors.splice"),
                undefined,
                [
                  ts.factory.createNumericLiteral(0),
                  ts.factory.createIdentifier("errors.length"),
                ],
              ),
            ),
          ),
          // validate when false === is<T>(input)
          ts.factory.createIfStatement(
            ts.factory.createStrictEquality(
              ts.factory.createFalse(),
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("__is"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
            ts.factory.createBlock([
              ts.factory.createExpressionStatement(
                ts.factory.createCallExpression(
                  ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    composed.parameters,
                    undefined,
                    undefined,
                    composed.body,
                  ),
                  undefined,
                  [
                    ts.factory.createIdentifier("input"),
                    ts.factory.createStringLiteral("$input"),
                    ts.factory.createTrue(),
                  ],
                ),
              ),
            ]),
          ),
          StatementFactory.constant(
            "success",
            ts.factory.createStrictEquality(
              ExpressionFactory.number(0),
              ts.factory.createIdentifier("errors.length"),
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createAsExpression(
              create_output(),
              TypeFactory.keyword("any"),
            ),
          ),
        ],
        true,
      ),
    );
    return {
      functions: {
        ...is.functions,
        ...composed.functions,
      },
      statements: [
        ...is.statements,
        ...composed.statements,
        StatementFactory.constant("__is", is.arrow),
        StatementFactory.constant(
          "errors",
          ts.factory.createAsExpression(
            ts.factory.createArrayLiteralExpression([]),
            ts.factory.createArrayTypeNode(TypeFactory.keyword("any")),
          ),
        ),
        StatementFactory.constant(
          "$report",
          ts.factory.createCallExpression(
            IdentifierFactory.access(
              ts.factory.createParenthesizedExpression(
                ts.factory.createAsExpression(
                  props.modulo,
                  TypeFactory.keyword("any"),
                ),
              ),
            )("report"),
            [],
            [ts.factory.createIdentifier("errors")],
          ),
        ),
      ],
      arrow,
    };
  };

  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (equals: boolean) =>
    (type: ts.Type, name?: string) => {
      const importer: FunctionImporter = new FunctionImporter(modulo.getText());
      const result: FeatureProgrammer.IDecomposed = decompose({
        equals,
        project,
        modulo,
        importer,
        type,
        name,
      });
      return FeatureProgrammer.writeDecomposed({
        modulo,
        importer,
        result,
      });
    };
}

const combine =
  (equals: boolean) =>
  (project: IProject) =>
  (importer: FunctionImporter): CheckerProgrammer.IConfig.Combiner =>
  (explore: CheckerProgrammer.IExplore) => {
    if (explore.tracable === false)
      return IsProgrammer.configure({
        object: validate_object(equals)(project)(importer),
        numeric: true,
      })(project)(importer).combiner(explore);

    const path: string = explore.postfix
      ? `_path + ${explore.postfix}`
      : "_path";
    return (logic) => (input, binaries, expected) =>
      logic === "and"
        ? binaries
            .map((binary) =>
              binary.combined
                ? binary.expression
                : ts.factory.createLogicalOr(
                    binary.expression,
                    create_report_call(
                      explore.source === "top"
                        ? ts.factory.createTrue()
                        : ts.factory.createIdentifier("_exceptionable"),
                    )(ts.factory.createIdentifier(path), expected, input),
                  ),
            )
            .reduce(ts.factory.createLogicalAnd)
        : ts.factory.createLogicalOr(
            binaries
              .map((binary) => binary.expression)
              .reduce(ts.factory.createLogicalOr),
            create_report_call(
              explore.source === "top"
                ? ts.factory.createTrue()
                : ts.factory.createIdentifier("_exceptionable"),
            )(ts.factory.createIdentifier(path), expected, input),
          );
  };

const validate_object =
  (equals: boolean) => (project: IProject) => (importer: FunctionImporter) =>
    check_object({
      equals,
      undefined: true,
      assert: false,
      reduce: ts.factory.createLogicalAnd,
      positive: ts.factory.createTrue(),
      superfluous: (value) =>
        create_report_call()(
          ts.factory.createAdd(
            ts.factory.createIdentifier("_path"),
            ts.factory.createCallExpression(importer.use("join"), undefined, [
              ts.factory.createIdentifier("key"),
            ]),
          ),
          "undefined",
          value,
        ),
      halt: (expr) =>
        ts.factory.createLogicalOr(
          ts.factory.createStrictEquality(
            ts.factory.createFalse(),
            ts.factory.createIdentifier("_exceptionable"),
          ),
          expr,
        ),
    })(project)(importer);

const joiner =
  (equals: boolean) =>
  (project: IProject) =>
  (importer: FunctionImporter): CheckerProgrammer.IConfig.IJoiner => ({
    object: validate_object(equals)(project)(importer),
    array: (input, arrow) =>
      check_everything(
        ts.factory.createCallExpression(
          IdentifierFactory.access(input)("map"),
          undefined,
          [arrow],
        ),
      ),
    failure: (value, expected, explore) =>
      create_report_call(
        explore?.from === "top"
          ? ts.factory.createTrue()
          : ts.factory.createIdentifier("_exceptionable"),
      )(
        ts.factory.createIdentifier(
          explore?.postfix ? `_path + ${explore.postfix}` : "_path",
        ),
        expected,
        value,
      ),
    tuple: (binaries) =>
      check_everything(ts.factory.createArrayLiteralExpression(binaries, true)),
  });

const create_output = () =>
  ts.factory.createObjectLiteralExpression(
    [
      ts.factory.createShorthandPropertyAssignment("success"),
      ts.factory.createShorthandPropertyAssignment("errors"),
      ts.factory.createPropertyAssignment(
        "data",
        ts.factory.createConditionalExpression(
          ts.factory.createIdentifier("success"),
          undefined,
          ts.factory.createIdentifier("input"),
          undefined,
          ts.factory.createIdentifier("undefined"),
        ),
      ),
    ],
    true,
  );

const create_report_call =
  (exceptionable?: ts.Expression) =>
  (
    path: ts.Expression,
    expected: string,
    value: ts.Expression,
  ): ts.Expression =>
    ts.factory.createCallExpression(
      ts.factory.createIdentifier("$report"),
      undefined,
      [
        exceptionable ?? ts.factory.createIdentifier("_exceptionable"),
        ts.factory.createObjectLiteralExpression(
          [
            ts.factory.createPropertyAssignment("path", path),
            ts.factory.createPropertyAssignment(
              "expected",
              ts.factory.createStringLiteral(expected),
            ),
            ts.factory.createPropertyAssignment("value", value),
          ],
          true,
        ),
      ],
    );
