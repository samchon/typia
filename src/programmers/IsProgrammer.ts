import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { ValueFactory } from "../factories/ValueFactory";

import { IProject } from "../transformers/IProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { FunctionImporter } from "./helpers/FunctionImporeter";

export namespace IsProgrammer {
    export function CONFIG(numeric: boolean): CheckerProgrammer.IConfig {
        return {
            functors: "$io",
            unioners: "$iu",
            trace: false,
            numeric,
            combiner: () => (type: "and" | "or") => {
                const initial: ts.TrueLiteral | ts.FalseLiteral =
                    type === "and"
                        ? ts.factory.createTrue()
                        : ts.factory.createFalse();
                const binder =
                    type === "and"
                        ? ts.factory.createLogicalAnd
                        : ts.factory.createLogicalOr;
                return (_input: ts.Expression, expressions: ts.Expression[]) =>
                    expressions.length
                        ? expressions.reduce((x, y) => binder(x, y))
                        : initial;
            },
            joiner: CheckerProgrammer.DEFAULT_JOINER(),
        };
    }

    /* -----------------------------------------------------------
        GENERATORS
    ----------------------------------------------------------- */
    export function generate(
        project: IProject,
        modulo: ts.LeftHandSideExpression,
    ) {
        const importer: FunctionImporter = new FunctionImporter();
        return CheckerProgrammer.generate(
            project,
            CONFIG(true),
            modulo,
            importer,
        );
    }

    export const generate_functors = (
        project: IProject,
        importer: FunctionImporter,
    ) => CheckerProgrammer.generate_functors(project, CONFIG(false), importer);

    export const generate_unioners = (
        project: IProject,
        importer: FunctionImporter,
    ) => CheckerProgrammer.generate_unioners(project, CONFIG(false), importer);

    /* -----------------------------------------------------------
        DECODERS
    ----------------------------------------------------------- */
    export const decode = (project: IProject, importer: FunctionImporter) =>
        CheckerProgrammer.decode(project, CONFIG(false), importer);

    export const decode_object = () =>
        CheckerProgrammer.decode_object(CONFIG(false));

    export function decode_to_json(input: ts.Expression): ts.Expression {
        return ts.factory.createLogicalAnd(
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("object"),
                ValueFactory.TYPEOF(input),
            ),
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("function"),
                ValueFactory.TYPEOF(IdentifierFactory.join(input, "toJSON")),
            ),
        );
    }

    export function decode_functional(input: ts.Expression) {
        return ts.factory.createStrictEquality(
            ts.factory.createStringLiteral("function"),
            ValueFactory.TYPEOF(input),
        );
    }
}
