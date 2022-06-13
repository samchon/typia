// import ts from "typescript";
// import { MetadataCollection } from "../../factories/MetadataCollection";
// import { MetadataFactory } from "../../factories/MetadataFactory";
// import { IMetadata } from "../../structures/IMetadata";

// export namespace StringifyTransformer {
//     export function transform(
//         checker: ts.TypeChecker,
//         expression: ts.CallExpression,
//     ): ts.Expression {
//         if (expression.arguments.length !== 1)
//             throw new Error(ErrorMessages.NO_INPUT_VALUE);

//         const type: ts.Type =
//             expression.typeArguments && expression.typeArguments[0]
//                 ? checker.getTypeFromTypeNode(expression.typeArguments[0])
//                 : checker.getTypeAtLocation(expression.arguments[0]!);
//         const collection: MetadataCollection = new MetadataCollection();
//         const meta: IMetadata | null = MetadataFactory.generate(
//             collection,
//             checker,
//             type,
//             {
//                 escape: true,
//                 accumulate: true,
//             },
//         );

//         return ts.factory.createCallExpression(null!, undefined, [
//             expression.arguments[0]!,
//         ]);
//     }
// }

// const enum ErrorMessages {
//     NO_INPUT_VALUE = "Error on TSON.strigify(): no input value.",
// }
