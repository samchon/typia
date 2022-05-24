import crypto from "crypto";
import path from "path";
import ts from "typescript";

import { SchemaFactory } from "../factories/SchemaFactory";
import { IMetadata } from "../structures/IMetadata";
import { IProject } from "../structures/IProject";
import { ExpressionFactory } from "./ExpressionFactory";
import { MetadataFactory } from "./MetadataFactory";

export namespace FunctionFactory
{
    export type Closure = 
        (
            project: IProject, 
            expression: ts.CallExpression, 
            type: ts.Type | null
        ) => ts.Expression;

    export function generate
        (
            project: IProject, 
            expression: ts.CallExpression
        ): Closure | null
    {
        //----
        // VALIDATIONS
        //----
        // SIGNATURE
        const signature: ts.Signature | undefined = project.checker.getResolvedSignature(expression);
        if (!signature || !signature.declaration)
            return null;

        // EXACT FILE
        const file: string = path.resolve(signature.declaration.getSourceFile().fileName);
        if (file !== LIB_PATH && file !== SRC_PATH)
            return null;

        // FIND FUNCTION
        const name: string = project.checker.getTypeAtLocation(signature.declaration).symbol.name;
        const generator: IGenerator | undefined = FUNCTORS[name];

        if (generator === undefined)
            return null;
        else if (expression.arguments.length !== generator.count)
            return null;

        // RETURNS
        return generator.argument();
    }

    function argue_stringify
        (
            project: IProject,
            expression: ts.CallExpression,
            type: ts.Type | null
        ): ts.ArrayLiteralExpression
    {
        if (type === null)
        {
            const top: ts.Expression = expression.arguments[0]!;
            type = project.checker.getTypeAtLocation(top);
        }
        
        const app: IMetadata.IApplication | null = MetadataFactory.generate
        (
            project.checker, 
            type
        );
        const application = SchemaFactory.application(app, SchemaFactory.JSON_PREFIX);
        const literal = ExpressionFactory.generate(application);

        const script: string = project.printer.printNode
        (
            ts.EmitHint.Unspecified, 
            literal,
            expression.getSourceFile()
        );
        const key: string = crypto
            .createHash("sha256")
            .update(script)
            .digest("base64");

        return ts.factory.createArrayLiteralExpression
        ([
            ts.factory.createStringLiteral(key),
            ts.factory.createArrowFunction
            (
                undefined,
                undefined,
                [],
                undefined,
                undefined,
                literal
            )
        ]);
    }

    function argue_application(method: string, prefix: string)
    {
        return function(project: IProject, expression: ts.CallExpression, type: ts.Type | null)
        {
            if (type === null)
            {
                const file: ts.SourceFile = expression.getSourceFile();
                const { line, character } = file.getLineAndCharacterOfPosition(expression.pos);

                throw new Error(`Error on TSON.${method}(): the generic argument must be specified - ${file.fileName}:${line + 1}:${character + 1}.`);
            }

            const app: IMetadata.IApplication | null = MetadataFactory.generate(project.checker, type);
            const application = SchemaFactory.application(app, prefix);
            const literal = ExpressionFactory.generate(application);

            return ts.factory.createArrowFunction
            (
                undefined,
                undefined,
                [],
                undefined,
                undefined,
                literal
            );
        }
    }

    interface IGenerator
    {
        count: number;
        argument: () => Closure;
    }

    const LIB_PATH = path.resolve(path.join(__dirname, "..", "module.d.ts"));
    const SRC_PATH = path.resolve(path.join(__dirname, "..", "module.ts"));
    const FUNCTORS: Record<string, IGenerator> = {
        stringify: {
            count: 1,
            argument: () => argue_stringify,
        },
        createStringifier: {
            count: 0,
            argument: () => argue_application("createStringifier", SchemaFactory.JSON_PREFIX),
        },
        createApplication: {
            count: 0,
            argument: () => argue_application("createApplication", SchemaFactory.SWAGGER_PREFIX)
        }
    };
}