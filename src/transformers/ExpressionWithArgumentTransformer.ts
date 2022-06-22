// import path from "path";
// import ts from "typescript";
// import { AssertProgrammer } from "../programmers/AssertProgrammer";
// import { IsProgrammer } from "../programmers/IsProgrammer";
// import { StringifyProgrammer } from "../programmers/StringifyProgrammer";
// import { IProject } from "../structures/IProject";

// export namespace ExpressionWithArgumentTransformer {
//     export function transform(
//         project: IProject,
//         expression: ts.ExpressionWithTypeArguments,
//     ): ts.Expression {
//         //----
//         // VALIDATIONS
//         //----
//         // SYMBOL DECLARATION
//         const symbol: ts.Symbol | undefined =
//             project.checker.getSymbolAtLocation(expression.expression);
//         const declaration: ts.Declaration | undefined = symbol?.declarations
//             ? symbol.declarations[0]
//             : undefined;
//         if (!declaration) return expression;

//         // FILE PATH
//         const file: string = path.resolve(declaration.getSourceFile().fileName);
//         if (file !== LIB_PATH && file !== SRC_PATH) return expression;

//         // ARGUMENTS
//         if (expression.typeArguments?.length !== 1) return expression;

//         //----
//         // TRANSFORMATION
//         //----
//         // GET MODULO AND TYPE
//         const modulo: ts.LeftHandSideExpression = expression.expression;
//         const type: ts.Type = project.checker.getTypeFromTypeNode(
//             expression.typeArguments[0]!,
//         );

//         // FUNCTION NAME
//         const { name } = project.checker.getTypeAtLocation(declaration).symbol;

//         // FIND TRANSFORMER
//         const functor: (() => Task) | undefined = FUNCTORS[name];
//         if (functor === undefined) return expression;

//         // RETURNS WITH TRANSFORMATION
//         return functor()(project, modulo, type);
//     }
// }

// type Task = (
//     project: IProject,
//     modulo: ts.LeftHandSideExpression,
//     type: ts.Type,
// ) => ts.ArrowFunction;

// const LIB_PATH = path.resolve(path.join(__dirname, "..", "module.d.ts"));
// const SRC_PATH = path.resolve(path.join(__dirname, "..", "module.ts"));

// const FUNCTORS: Record<string, () => Task> = {
//     assert: () => AssertProgrammer.generate,
//     is: () => (project, _modulo, type) => IsProgrammer.generate(project, type),
//     stringify: () => (project, modulo, type) =>
//         StringifyProgrammer.generate(modulo)(project, type),
// };
