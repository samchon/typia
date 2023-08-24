import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";

import { IProject } from "../../transformers/IProject";

import { FunctionImporter } from "../helpers/FunctionImporeter";
import { check_string_tags } from "./check_string_tags";

/**
 * @internal
 */
export const check_string =
    (project: IProject) =>
    (importer: FunctionImporter) =>
    (tags: IMetadataTypeTag[][], metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression) => ({
        expression: is_string(project)(tags)(input),
        tags: [...check_string_tags(importer)(metaTags)(input)],
    });

const is_string =
    (project: IProject) =>
    (matrix: IMetadataTypeTag[][]) =>
    (input: ts.Expression) => {
        // BASIC TYPEOF EXPRESSION
        const conditions: ts.Expression[] = [
            ts.factory.createStrictEquality(
                ts.factory.createStringLiteral("string"),
                ts.factory.createTypeOfExpression(input),
            ),
        ];

        // ADJUST TYPED TAGS
        if (matrix.length) {
            const logic: ts.Expression = matrix
                .map((row) =>
                    row
                        .map((tag) =>
                            ExpressionFactory.transpile(project.context)(
                                tag.validate,
                            )(input),
                        )
                        .reduce((a, b) => ts.factory.createLogicalAnd(a, b)),
                )
                .reduce((a, b) => ts.factory.createLogicalOr(a, b));
            conditions.push(logic);
        }

        return conditions.length === 1
            ? conditions[0]!
            : conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
    };
