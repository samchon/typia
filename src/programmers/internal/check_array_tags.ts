import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";
import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { IMetadataCommentTag } from "../../schemas/metadata/IMetadataCommentTag";
import { IMetadataTypeTag } from "../../schemas/metadata/IMetadataTypeTag";

import { IProject } from "../../transformers/IProject";

import { ICheckEntry } from "../helpers/ICheckEntry";
import { check_array_length } from "./check_array_length";

/**
 * @internal
 */
export const check_array_tags =
    (project: IProject) =>
    (matrix: IMetadataTypeTag[][], metaTags: IMetadataCommentTag[]) =>
    (input: ts.Expression): ICheckEntry => ({
        expression: is_array(project)(matrix)(input),
        tags: matrix.length
            ? []
            : check_array_length(metaTags)(
                  IdentifierFactory.access(input)("length"),
              ),
    });

const is_array =
    (project: IProject) =>
    (matrix: IMetadataTypeTag[][]) =>
    (input: ts.Expression) =>
        matrix.length === 0
            ? null
            : matrix
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
