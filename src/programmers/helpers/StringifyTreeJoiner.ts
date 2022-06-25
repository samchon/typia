// import ts from "typescript";
// import { IdentifierFactory } from "../../factories/IdentifierFactory";
// import { StatementFactory } from "../../factories/StatementFactory";
// import { IExpressionEntry } from "../../structures/IExpressionEntry";
// import { IRawMetadata } from "../../structures/IRawMetadata";
// import { StringifyJoiner } from "./StringifyJoinder";

// export namespace StringifyTreeJoiner {
//     export function join(
//         parent: IRawMetadata.IRawObject,
//         recursive: IExpressionEntry,
//         entries: IExpressionEntry[],
//     ): ts.Block {
//         //----
//         // DEFINE VARIABLES
//         //----
//         // COMMON HEAD FUNCTION
//         const head = StatementFactory.variable(
//             ts.NodeFlags.Const,
//             "head",
//             ts.factory.createArrowFunction(
//                 undefined,
//                 undefined,
//                 [
//                     ts.factory.createParameterDeclaration(
//                         undefined,
//                         undefined,
//                         undefined,
//                         ts.factory.createIdentifier("input"),
//                     ),
//                 ],
//                 undefined,
//                 undefined,
//                 StringifyJoiner.object(entries, parent, recursive),
//             ),
//         );

//         // VARIABLES FOR ADVANCING
//         const content = StatementFactory.variable(
//             ts.NodeFlags.Let,
//             "content",
//             ts.factory.createStringLiteral(""),
//         );
//         const count = StatementFactory.variable(
//             ts.NodeFlags.Let,
//             "count",
//             ZERO(),
//         );
//         const stack = StatementFactory.variable(
//             ts.NodeFlags.Const,
//             "stack",
//             ts.factory.createArrayLiteralExpression([INPUT()], true),
//         );

//         //----
//         // WHILE STATEMENT
//         //----
//         // LOOP BLOCK
//         const block: ts.Statement[] = [
//             StatementFactory.variable(
//                 // top = stack.pop()
//                 ts.NodeFlags.Const,
//                 "top",
//                 ts.factory.createCallExpression(
//                     ts.factory.createIdentifier("stack.pop"),
//                     undefined,
//                     undefined,
//                 ),
//             ),
//             ts.factory.createExpressionStatement(
//                 // content += handle(top)
//                 ts.factory.createBinaryExpression(
//                     ts.factory.createIdentifier("content"),
//                     ts.SyntaxKind.PlusEqualsToken,
//                     ts.factory.createCallExpression(
//                         ts.factory.createIdentifier("head"),
//                         [],
//                         [ts.factory.createIdentifier("top")],
//                     ),
//                 ),
//             ),
//             ts.factory.createExpressionStatement(
//                 // ++count
//                 ts.factory.createPrefixUnaryExpression(
//                     ts.SyntaxKind.PlusPlusToken,
//                     ts.factory.createIdentifier("count"),
//                 ),
//             ),
//             ts.factory.createIfStatement(
//                 // if (top.children.length !== 0)
//                 ts.factory.createStrictInequality(
//                     TOP(recursive.key, "length"),
//                     ts.factory.createNumericLiteral(0),
//                 ),
//                 // stack.push(...top.children.reverse())
//                 ts.factory.createExpressionStatement(
//                     ts.factory.createCallExpression(
//                         ts.factory.createIdentifier("stack.push"),
//                         undefined,
//                         [
//                             ts.factory.createSpreadElement(
//                                 ts.factory.createCallExpression(
//                                     TOP(recursive.key, "reverse"),
//                                     undefined,
//                                     undefined,
//                                 ),
//                             ),
//                         ],
//                     ),
//                 ),
//             ),
//         ];

//         // LOOP SATEMENT
//         const loop = ts.factory.createWhileStatement(
//             ts.factory.createStrictInequality(
//                 ZERO(),
//                 ts.factory.createIdentifier("stack.length"),
//             ),
//             ts.factory.createBlock(block),
//         );

//         // RETURN STATEMENT
//         const out = ts.factory.createReturnStatement(
//             ts.factory.createAdd(
//                 ts.factory.createIdentifier("content"),
//                 ts.factory.createCallExpression(
//                     IdentifierFactory.join(
//                         ts.factory.createStringLiteral("}]"),
//                         "repeat",
//                     ),
//                     undefined,
//                     [ts.factory.createIdentifier("count")],
//                 ),
//             ),
//         );

//         return ts.factory.createBlock(
//             [head, content, count, stack, loop, out],
//             true,
//         );
//     }

//     export function predicate(
//         parent: IRawMetadata.IRawObject,
//         entry: IExpressionEntry,
//     ): boolean {
//         if (
//             entry.meta.required === false ||
//             entry.meta.nullable === true ||
//             IRawMetadata.size(entry.meta) !== 1 ||
//             entry.meta.arraies.size !== 1
//         )
//             return false;

//         const elem: IRawMetadata = entry.meta.arraies.values().next().value;
//         return (
//             elem.required === true &&
//             elem.nullable === false &&
//             IRawMetadata.size(elem) === 1 &&
//             elem.objects.size === 1 &&
//             elem.objects.values().next().value[0].$id === parent.$id
//         );
//     }
// }

// const ZERO = () => ts.factory.createNumericLiteral(0);
// const INPUT = () => ts.factory.createIdentifier("input");
// const TOP = (key: string, property: string) =>
//     IdentifierFactory.join(
//         IdentifierFactory.join(ts.factory.createIdentifier("top"), key),
//         property,
//     );
