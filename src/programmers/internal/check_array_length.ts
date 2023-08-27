import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";
import { MetadataArray } from "../../schemas/metadata/MetadataArray";

import { IProject } from "../../transformers/IProject";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_array_length =
    (project: IProject) =>
    (array: MetadataArray) =>
    (input: ts.Expression): ICheckEntry => {
        const conditions: ICheckEntry.ICondition[][] = check_string_type_tags(
            project,
        )(array.tags)(input);

        return {
            expected: array.getName(),
            expression: null,
            conditions,
        };
    };

const check_string_type_tags =
    (project: IProject) =>
    (matrix: IMetadataTypeTag[][]) =>
    (input: ts.Expression): ICheckEntry.ICondition[][] =>
        matrix.map((row) =>
            row.map((tag) => ({
                expected: `Array<> & ${tag.name}`,
                expression: ExpressionFactory.transpile(project.context)(
                    tag.validate,
                )(input),
            })),
        );
