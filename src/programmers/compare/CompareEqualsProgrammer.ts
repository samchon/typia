import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { FunctionProgrammer } from "../helpers/FunctionProgrammer";

export namespace CompareEqualsProgrammer {
  export const decompose = (props: {
    context: ITypiaContext;
    functor: FunctionProgrammer;
    type: ts.Type;
    name: string | undefined;
  }): FeatureProgrammer.IDecomposed => {
    // ANALYZE TYPE
    // const collection: MetadataCollection = new MetadataCollection();
    // const result = MetadataFactory.analyze({
    //   checker: props.context.checker,
    //   transformer: props.context.transformer,
    //   options: {
    //     escape: false,
    //     constant: true,
    //     absorb: true,
    //   },
    //   collection,
    //   type: props.type,
    // });
    // if (result.success === false) {
    //   throw TransformerError.from({
    //     code: props.functor.method,
    //     errors: result.errors,
    //   });
    // }

    // DO TRANSFORM
    const a = ts.factory.createIdentifier("a");
    const b = ts.factory.createIdentifier("b");
    // console.log(props.type);

    // const statements = transform(a, b, result.data, props);
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
          [ts.factory.createExpressionStatement(expression)],
          true,
        ),
      ),
    };
  };

  export const write = (props: IProgrammerProps) => {
    const functor = new FunctionProgrammer(props.modulo.getText());
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      functor,
    });

    // console.log("-----------------------------------------------------");
    // console.log(props.context);
    // console.log("-----------------------------------------------------");
    // console.log(props.modulo);
    // console.log("-----------------------------------------------------");
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      functor,
      result,
    });
  };
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
  function eqeqeq(a: ts.Identifier, b: ts.Identifier) {
    return ts.factory.createExpressionStatement(
      ts.factory.createBinaryExpression(
        a,
        ts.factory.createToken(ts.SyntaxKind.EqualsEqualsEqualsToken),
        b,
      ),
    );
  }

  function eqeqeqReturn(a: ts.Identifier, b: ts.Identifier) {
    return ts.factory.createIfStatement(
      eqeqeq(a, b).expression,
      ts.factory.createReturnStatement(
        ts.factory.createToken(ts.SyntaxKind.TrueKeyword),
      ),
    );
  }

  function mergeWithAmp(expressions: ts.Expression[]) {
    if (expressions.length === 0) {
      return ts.factory.createTrue();
    }

    return expressions.reduce((acc, current) =>
      ts.factory.createBinaryExpression(
        acc,
        ts.factory.createToken(ts.SyntaxKind.AmpersandAmpersandToken),
        current,
      ),
    );
  }

  function transform(
    a: ts.Identifier,
    b: ts.Identifier,
    context: ITypiaContext,
    type: ts.Type,
  ): ts.Expression {
    if (isPrimitiveType(type)) {
      return eqeqeqReturn(a, b).expression;
    }

    if (context.checker.isArrayType(type)) {
      return eqeqeqReturn(a, b).expression;
    }
    if (context.checker.isTupleType(type)) {
      return eqeqeqReturn(a, b).expression;
    }

    if ((type.flags & ts.TypeFlags.Object) !== 0) {
      const properties = type.getProperties();
      const statements = properties.flatMap((prop) => {
        return transform(
          ts.factory.createIdentifier(`${a.escapedText}.${prop.escapedName}`),
          ts.factory.createIdentifier(`${b.escapedText}.${prop.escapedName}`),
          context,
          context.checker.getTypeOfSymbolAtLocation(
            prop,
            prop.declarations![0]!,
          ),
        );
      });
      return ts.factory.createBinaryExpression(
        eqeqeq(a, b).expression,
        ts.factory.createToken(ts.SyntaxKind.BarBarToken),
        mergeWithAmp(statements),
      );
    }

    throw new Error("Unsupported type");
  }

  // function transform_(
  //   a: ts.Identifier,
  //   b: ts.Identifier,
  //   metadata: Metadata,
  //   props: {
  //     context: ITypiaContext;
  //     type: ts.Type;
  //   },
  // ) {
  //   if (metadata.atomics[0]) {
  //     // DO:
  //     return [
  //       ts.factory.createExpressionStatement(
  //         ts.factory.createBinaryExpression(
  //           a,
  //           ts.factory.createToken(ts.SyntaxKind.EqualsEqualsEqualsToken),
  //           b,
  //         ),
  //       ),
  //     ];
  //   }
  //   // if (props.metadata.tuples[0]) {
  //   //   const tuple = props.metadata.tuples[0]!.type;
  //   //   console.log(tuple.elements.at(0));
  //   //   return [
  //   //     ts.factory.createExpressionStatement(
  //   //       ts.factory.createBinaryExpression(
  //   //         eqeqeq(a, b).expression,
  //   //         ts.factory.createToken(ts.SyntaxKind.AmpersandAmpersandEqualsToken),
  //   //         b,
  //   //       ),
  //   //     ),
  //   //   ];
  //   // }
  //   if (metadata.objects[0]) {
  //     // const tuple = props.metadata.tuples[0]!.type;
  //     // console.log(tuple.elements.at(0));
  //     // props.type.isTypeParameter
  //     return [eqeqeqReturn(a, b), ...transform_meta(a, b, metadata.objects)];
  //   }
  //
  //   return [
  //     ts.factory.createExpressionStatement(
  //       ts.factory.createBinaryExpression(
  //         a,
  //         ts.factory.createToken(ts.SyntaxKind.EqualsEqualsEqualsToken),
  //         b,
  //       ),
  //     ),
  //   ];
  // }
}
