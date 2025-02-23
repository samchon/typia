import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";

import { Metadata } from "../../schemas/metadata/Metadata";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";

export namespace CompareEqualsProgrammer {
  type Props = {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  };

  export function decompose(props: Props): FeatureProgrammer.IDecomposed {
    const result = MetadataFactory.analyze({
      type: props.type,
      checker: props.context.checker,
      transformer: props.context.transformer,
      collection: new MetadataCollection(),
      options: {
        escape: false,
        constant: true,
        absorb: true,
        validate: (metadata) => {
          const output: string[] = [];
          if (metadata.natives.some((native) => native.name === "WeakSet")) {
            output.push("unable to compare WeakSet");
          } else if (
            metadata.natives.some((native) => native.name === "WeakMap")
          ) {
            output.push("unable to compare WeakMap");
          }
          return output;
        },
      },
    });

    if (!result.success) {
      throw new Error(
        `typia.${props.functor.method}: Failure to analyze type ${props.type.getSymbol()?.getName()}`,
      );
    }

    const a = ts.factory.createIdentifier("a");
    const b = ts.factory.createIdentifier("b");
    const expression = transform(a, b, props, result.data);
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

  // function mergeWithBar(
  //   expressions: ts.Expression[],
  //   withParenthesized = false,
  // ) {
  //   if (expressions.length === 0) {
  //     return ts.factory.createTrue();
  //   }
  //
  //   const result = expressions.reduce((acc, current) => or(acc, current));
  //   if (withParenthesized) {
  //     return ts.factory.createParenthesizedExpression(result);
  //   }
  //   return result;
  // }

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
    Array: ts.factory.createIdentifier("Array"),

    item: ts.factory.createIdentifier("item"),
    size: ts.factory.createIdentifier("size"),
    from: ts.factory.createIdentifier("from"),
    index: ts.factory.createIdentifier("index"),
    every: ts.factory.createIdentifier("every"),
    values: ts.factory.createIdentifier("values"),
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
    if (typeof prop === "string") {
      return IdentifierFactory.access(target, prop, optinal);
    }

    return IdentifierFactory.access(
      target,
      prop.escapedText as string,
      optinal,
    );
  }

  function transform(
    a: ts.Expression,
    b: ts.Expression,
    props: Props,
    metadata: Metadata,
  ): ts.Expression {
    if (metadata.atomics[0]) {
      return eqeqeq(a, b).expression;
    }

    if (metadata.objects[0]) {
      const object = metadata.objects[0];
      const name = object.getName();

      if (object.type.recursive) {
        throw new TransformerError({
          code: `typia.compare.equals()`,
          message: `Detected recusion type ${props.type.getSymbol()?.getName()} -> ${object.type.name}.`,
        });
      }

      if (metadata.class) {
        throw new TransformerError({
          code: `typia.compare.equals()`,
          message: `Can't compare classes as static ${props.type.getSymbol()?.getName()} -> ${object.type.name}.`,
        });
      }

      if (name === "__type" || name.startsWith("__type.")) {
        return eqeqeq(a, b).expression;
      }

      const statements = object.type.properties.map((prop) => {
        if (!prop.key.getSoleLiteral()) {
          throw new TransformerError({
            code: `typia.compare.equals()`,
            message: `Detected unknown property name ${props.type.getSymbol()?.getName()} -> ${object.type.name}. If it's dynamic it's doesn't support.`,
          });
        }

        return transform(
          access(
            a,
            ts.factory.createIdentifier(prop.key.getSoleLiteral()!),
            prop.value.optional,
          ),
          access(
            b,
            ts.factory.createIdentifier(prop.key.getSoleLiteral()!),
            prop.value.optional,
          ),
          props,
          prop.value,
        );
      });
      return or(eqeqeq(a, b).expression, mergeWithAmp(statements, true));
    }

    if (metadata.tuples[0]) {
      const tuple = metadata.tuples[0];

      const compares = tuple.type.elements.map((type, index) =>
        transform(
          indexAccess(a, ts.factory.createIdentifier(index.toString())),
          indexAccess(b, ts.factory.createIdentifier(index.toString())),
          props,
          type,
        ),
      );
      return or(eqeqeq(a, b).expression, mergeWithAmp(compares, true));
    }

    function compaeItem(meta: Metadata) {
      return ts.factory.createArrowFunction(
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
              props,
              meta,
            ),
          ),
        ]),
      );
    }

    function compareIterable(meta: Metadata) {
      return or(
        eqeqeq(a, b).expression,
        ts.factory.createParenthesizedExpression(
          and(
            eqeqeq(access(a, ids.size), access(b, ids.size)).expression,

            ts.factory.createCallExpression(
              access(
                ts.factory.createCallExpression(
                  access(ids.Array, ids.from),
                  undefined,
                  [
                    ts.factory.createCallExpression(
                      access(a, ids.values),
                      undefined,
                      undefined,
                    ),
                  ],
                ),
                ids.every,
              ),
              undefined,
              [compaeItem(meta)],
            ),
          ),
        ),
      );
    }

    if (metadata.arrays[0]) {
      return or(
        eqeqeq(a, b).expression,
        ts.factory.createParenthesizedExpression(
          and(
            eqeqeq(access(a, ids.length), access(b, ids.length)).expression,
            ts.factory.createCallExpression(access(a, ids.every), undefined, [
              compaeItem(metadata.arrays[0].type.value),
            ]),
          ),
        ),
      );
    } else if (metadata.sets[0]) {
      return compareIterable(metadata.sets[0].value);
    } else if (metadata.maps[0]) {
      return compareIterable(metadata.maps[0].value);
    }

    return eqeqeq(a, b).expression;
  }
}
