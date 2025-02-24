import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { MetadataCollection } from "../../factories/MetadataCollection";
import { MetadataFactory } from "../../factories/MetadataFactory";
import { StatementFactory } from "../../factories/StatementFactory";

import { Metadata } from "../../schemas/metadata/Metadata";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";
import { MetadataNative } from "../../schemas/metadata/MetadataNative";
import { MetadataObject } from "../../schemas/metadata/MetadataObject";
import { MetadataTuple } from "../../schemas/metadata/MetadataTuple";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";
import { TransformerError } from "../../transformers/TransformerError";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";

export namespace CompareEqualsProgrammer {
  type Props = {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    metaCollection: MetadataCollection;
    type: ts.Type;
    name: string | undefined;
  };

  export function decompose(props: Props): FeatureProgrammer.IDecomposed {
    const result = MetadataFactory.analyze({
      type: props.type,
      checker: props.context.checker,
      transformer: props.context.transformer,
      collection: props.metaCollection,
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
    const argType = ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword);

    return {
      functions: {},
      statements: [],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(a.text, argType),
          IdentifierFactory.parameter(b.text, argType),
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
      metaCollection: new MetadataCollection(),
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
    index: IdentifierFactory.parameter,
  };
  const ids = {
    Map: ts.factory.createIdentifier("Map"),
    Set: ts.factory.createIdentifier("Set"),
    Array: ts.factory.createIdentifier("Array"),
    String: ts.factory.createIdentifier("String"),

    zero: ts.factory.createIdentifier("0"),
    item: ts.factory.createIdentifier("item"),
    size: ts.factory.createIdentifier("size"),
    from: ts.factory.createIdentifier("from"),
    every: ts.factory.createIdentifier("every"),
    values: ts.factory.createIdentifier("values"),
    length: ts.factory.createIdentifier("length"),
    object: ts.factory.createIdentifier('"object"'),
    isArray: ts.factory.createIdentifier("isArray"),
    funtion: ts.factory.createIdentifier('"funtion"'),
    toString: ts.factory.createIdentifier("toString"),
    difference: ts.factory.createIdentifier("difference"),

    index: () => ts.factory.createUniqueName("index"),
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

  function transformObject(
    a: ts.Expression,
    b: ts.Expression,
    props: Props,
    metadata: Metadata,
    object: MetadataObject,
  ) {
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

    const type = props.metaCollection.findObjectType(object.type);
    if (type) {
      for (const symbol of type.getApparentProperties()) {
        const node = symbol.getDeclarations()?.[0] as
          | ts.PropertyDeclaration
          | undefined;
        if (!node) {
          continue;
        }
        if (ts.isMethodSignature(node)) {
          statements.push(
            eqeqeq(access(a, symbol.getName()), access(b, symbol.getName()))
              .expression,
          );
        }
      }
    }

    return or(eqeqeq(a, b).expression, mergeWithAmp(statements, true));
  }

  function compareItem(b: ts.Expression, props: Props, metadata?: Metadata) {
    const index = ids.index();
    const compareExpression = metadata
      ? transform(
          ids.item,
          indexAccess(
            ts.factory.createAsExpression(
              b,
              ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword),
            ),
            index,
            true,
          ),
          props,
          metadata,
        )
      : eqeqeq(index, b).expression;
    return ts.factory.createArrowFunction(
      undefined,
      undefined,
      [params.item, params.index(index)],
      undefined,
      undefined,
      ts.factory.createBlock([
        ts.factory.createReturnStatement(compareExpression),
      ]),
    );
  }

  function iife(body: ts.Statement[]) {
    const arrowFunction = ts.factory.createArrowFunction(
      undefined,
      undefined,
      [],
      undefined,
      ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      ts.factory.createBlock(body, true),
    );
    return ts.factory.createCallExpression(
      ts.factory.createParenthesizedExpression(arrowFunction),
      undefined,
      [],
    );
  }

  function spreadClone(exp: ts.Expression) {
    const spreadElement = ts.factory.createSpreadElement(exp);
    return ts.factory.createArrayLiteralExpression(
      [spreadElement],
      /* multiLine */ false,
    );
  }

  function transformIterable(
    a: ts.Expression,
    b: ts.Expression,
    _props: Props,
    _metadata: Metadata,
  ) {
    const a1 = ts.factory.createUniqueName("a1");
    const b1 = ts.factory.createUniqueName("b1");
    const iffeCompare = iife([
      StatementFactory.constant({
        name: a1.text,
        value: spreadClone(
          ts.factory.createCallExpression(
            access(a, ids.values),
            undefined,
            undefined,
          ),
        ),
      }),
      StatementFactory.constant({
        name: b1.text,
        value: spreadClone(
          ts.factory.createCallExpression(
            access(b, ids.values),
            undefined,
            undefined,
          ),
        ),
      }),

      ts.factory.createReturnStatement(
        compareEvery(
          ts.factory.createIdentifier(a1.text),
          ts.factory.createIdentifier(b1.text),
          _props,
          _metadata,
        ),
      ),
    ]);

    return or(
      eqeqeq(a, b).expression,
      ts.factory.createParenthesizedExpression(
        and(
          eqeqeq(access(a, ids.size), access(b, ids.size)).expression,
          iffeCompare,
        ),
      ),
    );
  }

  function transformTuple(
    a: ts.Expression,
    b: ts.Expression,
    props: Props,
    _metadata: Metadata,
    tuple: MetadataTuple,
  ) {
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

  function compareEvery(
    a: ts.Expression,
    b: ts.Expression,
    props: Props,
    metadata?: Metadata,
  ) {
    return or(
      eqeqeq(a, b).expression,
      ts.factory.createParenthesizedExpression(
        and(
          eqeqeq(access(a, ids.length), access(b, ids.length)).expression,
          ts.factory.createCallExpression(access(a, ids.every), undefined, [
            compareItem(b, props, metadata),
          ]),
        ),
      ),
    );
  }

  const natviesEququq = ["String", "Boolean", "Number", "Symbol", "BigInt"];
  function transformNatives(
    a: ts.Expression,
    b: ts.Expression,
    props: Props,
    native: MetadataNative,
  ) {
    if (natviesEququq.includes(native.name)) {
      return eqeqeq(a, b).expression;
    }
    if (native.name === "Date") {
      return eqeqeq(
        ts.factory.createCallExpression(ids.String, undefined, [a]),
        ts.factory.createCallExpression(ids.String, undefined, [b]),
      ).expression;
    }

    if (native.name === "ArrayBuffer" || native.name === "SharedArrayBuffer") {
      throw new TransformerError({
        code: `typia.compare.equals()`,
        message: `SharedArrayBuffer and ArrayBuffer types are unsupported to compare ${props.type.getSymbol()?.getName()}.`,
      });
    }
    if (native.name.includes("Array")) {
      return compareEvery(a, b, props);
    }

    throw new TransformerError({
      code: `typia.compare.equals()`,
      message: `${native.name} type is unsupported to compare ${props.type.getSymbol()?.getName()}.`,
    });
  }
  function transformArray(
    a: ts.Expression,
    b: ts.Expression,
    props: Props,
    array: MetadataArray,
  ) {
    if (array.type.recursive) {
      throw new TransformerError({
        code: `typia.compare.equals()`,
        message: `Detected recusion type ${props.type.getSymbol()?.getName()} -> ${array.type.name}.`,
      });
    }
    return compareEvery(a, b, props, array.type.value);
  }

  // function instaceof(a: ts.Expression, b: ts.Expression) {
  //   return ts.factory.createBinaryExpression(
  //     a,
  //     ts.factory.createToken(ts.SyntaxKind.InstanceOfKeyword),
  //     b,
  //   );
  // }

  // function typeOf(a: ts.Expression, b: ts.Expression) {
  //   return eqeqeq(ts.factory.createTypeOfExpression(a), b).expression;
  // }

  function isArray(a: ts.Expression) {
    return ts.factory.createCallExpression(
      access(ids.Array, ids.isArray),
      undefined,
      [a],
    );
  }

  // function isFunctionProperty(node: ts.PropertyDeclaration): boolean {
  //   if (ts.isMethodSignature(node)) {
  //     return true;
  //   }
  //   if (node.initializer) {
  //     if (
  //       ts.isArrowFunction(node.initializer) ||
  //       ts.isFunctionExpression(node.initializer)
  //     ) {
  //       return true;
  //     }
  //   }
  //
  //   if (node.type) {
  //     if (ts.isFunctionTypeNode(node.type)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  function transform(
    a: ts.Expression,
    b: ts.Expression,
    props: Props,
    metadata: Metadata,
  ): ts.Expression {
    if (metadata.any) {
      throw new TransformerError({
        code: `typia.compare.equals()`,
        message: `Detected any type ${props.type.getSymbol()?.getName()}. It can't be supported for static equals.`,
      });
    }
    if (metadata.size() > 1) {
      const compares: ts.Expression[] = [];

      if (
        metadata.constants.length > 0 ||
        metadata.atomics.length > 0 ||
        metadata.functions.length > 0
      ) {
        compares.push(eqeqeq(a, b).expression);
      }
      if (metadata.maps.length > 0) {
        throw new TransformerError({
          code: `typia.compare.equals()`,
          message: `Union type for Set are unsupported to compare ${props.type.getSymbol()?.getName()}.`,
        });
        // compares.push(
        //   and(
        //     instaceof(a, ids.Map),
        //     mergeWithBar(
        //       metadata.maps.map((element) =>
        //         transformIterable(a, b, props, element.value),
        //       ),
        //     ),
        //   ),
        // );
      }

      if (metadata.sets.length > 0) {
        throw new TransformerError({
          code: `typia.compare.equals()`,
          message: `Union type for Set are unsupported to compare ${props.type.getSymbol()?.getName()}.`,
        });
        // compares.push(
        //   and(
        //     instaceof(a, ids.Set),
        //     mergeWithBar(
        //       metadata.sets.map((element) =>
        //         transformIterable(a, b, props, element.value),
        //       ),
        //     ),
        //   ),
        // );
      }
      if (metadata.objects.length > 0) {
        throw new TransformerError({
          code: `typia.compare.equals()`,
          message: `Union type for Objects are unsupported to compare ${props.type.getSymbol()?.getName()}.`,
        });
        // compares.push(
        //   and(
        //     typeOf(a, ids.object),
        //     mergeWithBar(
        //       metadata.objects.map((element) =>
        //         transformObject(a, b, props, metadata, element),
        //       ),
        //     ),
        //   ),
        // );
      }
      if (metadata.arrays.length > 0) {
        compares.push(
          and(
            isArray(a),
            mergeWithBar(
              metadata.arrays.map((element) =>
                transformArray(a, b, props, element),
              ),
            ),
          ),
        );
      }

      // if (metadata.functions.length > 0) {
      //   compares.push(
      //     and(
      //       typeOf(a, ids.funtion),
      //       mergeWithBar(
      //         metadata.functions.map((element) =>
      //           eqeqeq(a, a).expression
      //         ),
      //       ),
      //     ),
      //   );
      // }

      return mergeWithBar(compares);
    }

    if (metadata.atomics[0] || metadata.constants[0] || metadata.functions[0]) {
      return eqeqeq(a, b).expression;
    }

    if (metadata.objects[0]) {
      return transformObject(a, b, props, metadata, metadata.objects[0]);
    }

    if (metadata.tuples[0]) {
      return transformTuple(a, b, props, metadata, metadata.tuples[0]);
    }

    if (metadata.arrays[0]) {
      return transformArray(a, b, props, metadata.arrays[0]);
    } else if (metadata.sets[0]) {
      return transformIterable(a, b, props, metadata.sets[0].value);
    } else if (metadata.maps[0]) {
      return transformIterable(a, b, props, metadata.maps[0].value);
    }

    if (metadata.natives[0]) {
      return transformNatives(a, b, props, metadata.natives[0]);
    }

    return eqeqeq(a, b).expression;
  }
}
