import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";

export namespace CompareEqualsProgrammer {
  export function decompose(props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed {
    const a = ts.factory.createIdentifier("a");
    const b = ts.factory.createIdentifier("b");
    const expression = transform(a, b, props.context, props.type);
    const argType = props.context.checker.typeToTypeNode(
      props.type,
      undefined,
      ts.NodeBuilderFlags.NoTruncation,
    );

    return {
      functions: {},
      statements: [],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("a", argType),
          IdentifierFactory.parameter("b", argType),
        ],
        ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
        undefined,
        ts.factory.createBlock(
          [ts.factory.createReturnStatement(expression)],
          true,
        ),
      ),
    };
  }

  export function write(props: IProgrammerProps) {
    const functor = new FunctionProgrammer(props.modulo.getText());
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
    });

    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  }

  function isPrimitiveType(type: ts.Type): boolean {
    const primitiveFlags =
      ts.TypeFlags.String |
      ts.TypeFlags.Number |
      ts.TypeFlags.Boolean |
      ts.TypeFlags.BigInt |
      ts.TypeFlags.ESSymbol |
      ts.TypeFlags.Null |
      ts.TypeFlags.Undefined |
      ts.TypeFlags.StringLiteral |
      ts.TypeFlags.NumberLiteral |
      ts.TypeFlags.BooleanLiteral |
      ts.TypeFlags.BigIntLiteral;
    return (type.flags & primitiveFlags) !== 0;
  }
  function eqeqeq(a: ts.Expression, b: ts.Expression) {
    return ts.factory.createExpressionStatement(
      ts.factory.createBinaryExpression(
        a,
        ts.factory.createToken(ts.SyntaxKind.EqualsEqualsEqualsToken),
        b,
      ),
    );
  }

  function mergeWithAmp(
    expressions: ts.Expression[],
    withParenthesized = false,
  ) {
    if (expressions.length === 0) {
      return ts.factory.createTrue();
    }

    const result = expressions.reduce((acc, current) => and(acc, current));
    if (withParenthesized) {
      return ts.factory.createParenthesizedExpression(result);
    }
    return result;
  }

  function mergeWithBar(
    expressions: ts.Expression[],
    withParenthesized = false,
  ) {
    if (expressions.length === 0) {
      return ts.factory.createTrue();
    }

    const result = expressions.reduce((acc, current) => or(acc, current));
    if (withParenthesized) {
      return ts.factory.createParenthesizedExpression(result);
    }
    return result;
  }

  function or(a: ts.Expression, b: ts.Expression) {
    return ts.factory.createBinaryExpression(
      a,
      ts.factory.createToken(ts.SyntaxKind.BarBarToken),
      b,
    );
  }

  function and(a: ts.Expression, b: ts.Expression) {
    return ts.factory.createBinaryExpression(
      a,
      ts.factory.createToken(ts.SyntaxKind.AmpersandAmpersandToken),
      b,
    );
  }

  const params = {
    item: IdentifierFactory.parameter("item"),
    index: IdentifierFactory.parameter("index"),
  };
  const ids = {
    item: ts.factory.createIdentifier("item"),
    index: ts.factory.createIdentifier("index"),
    every: ts.factory.createIdentifier("every"),
    length: ts.factory.createIdentifier("length"),
  };

  function indexAccess(
    arr: ts.Expression,
    id: ts.Expression,
    nonNullable = false,
  ) {
    const elementAccess = ts.factory.createElementAccessExpression(arr, id);
    if (nonNullable) {
      return ts.factory.createNonNullExpression(elementAccess);
    }
    return elementAccess;
  }

  function access(
    target: ts.Expression,
    prop: string | ts.MemberName,
    optinal = false,
  ) {
    if (optinal) {
      return ts.factory.createPropertyAccessChain(
        target,
        ts.factory.createToken(ts.SyntaxKind.QuestionDotToken),
        prop,
      );
    } else {
      return ts.factory.createPropertyAccessExpression(target, prop);
    }
  }

  function transform(
    a: ts.Expression,
    b: ts.Expression,
    context: ITypiaContext,
    type: ts.Type,
  ): ts.Expression {
    if (type.isUnion()) {
      const union = type as ts.UnionType;
      let primitiveHandled = false;
      const compares: ts.Expression[] = [];
      for (const type of union.types) {
        if (isPrimitiveType(type)) {
          if (primitiveHandled) {
            continue;
          }
          primitiveHandled = true;
        }
        compares.push(transform(a, b, context, type));
      }
      return or(eqeqeq(a, b).expression, mergeWithBar(compares, true));
    }

    if (isPrimitiveType(type)) {
      return eqeqeq(a, b).expression;
    }

    if (context.checker.isTupleType(type)) {
      const tuple = type as ts.TypeReference;
      const types = context.checker.getTypeArguments(tuple);
      const compares = types.map((type, index) =>
        transform(
          indexAccess(a, ts.factory.createIdentifier(index.toString())),
          indexAccess(b, ts.factory.createIdentifier(index.toString())),
          context,
          type,
        ),
      );
      return or(eqeqeq(a, b).expression, mergeWithAmp(compares, true));
    }

    if (context.checker.isArrayType(type)) {
      const elementType = context.checker.getElementTypeOfArrayType(type);
      if (!elementType) {
        throw new Error(`Unknown type of ${type}`);
      }

      const checkFn = ts.factory.createArrowFunction(
        undefined,
        undefined,
        [params.item, params.index],
        undefined,
        undefined,
        ts.factory.createBlock([
          ts.factory.createReturnStatement(
            transform(
              ids.item,
              indexAccess(
                ts.factory.createAsExpression(
                  b,
                  ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
                ),
                ids.index,
                true,
              ),
              context,
              elementType,
            ),
          ),
        ]),
      );

      return or(
        eqeqeq(a, b).expression,
        ts.factory.createParenthesizedExpression(
          and(
            eqeqeq(access(a, ids.length), access(b, ids.length)).expression,
            ts.factory.createCallExpression(access(a, ids.every), undefined, [
              checkFn,
            ]),
          ),
        ),
      );
    }

    if ((type.flags & ts.TypeFlags.Object) !== 0) {
      const properties = type.getProperties();
      const statements = properties.flatMap((prop) => {
        const optional =
          prop.declarations?.some((decl) => {
            if (
              ts.isPropertySignature(decl) ||
              ts.isPropertyDeclaration(decl)
            ) {
              return Boolean(decl.questionToken);
            }
            return false;
          }) ?? false;

        return transform(
          access(
            a,
            ts.factory.createIdentifier(prop.escapedName.toString()),
            optional,
          ),
          access(
            b,
            ts.factory.createIdentifier(prop.escapedName.toString()),
            optional,
          ),
          context,
          context.checker.getTypeOfSymbolAtLocation(
            prop,
            prop.declarations![0]!,
          ),
        );
      });
      return or(eqeqeq(a, b).expression, mergeWithAmp(statements, true));
    }

    return eqeqeq(a, b).expression;
  }
}
