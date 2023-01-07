import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { IMetadataTag } from "../../metadata/IMetadataTag";

import { check_array_length } from "./check_array_length";

/**
 * @internal
 */
export function check_array(
    input: ts.Expression,
    tagList: IMetadataTag[],
): ts.Expression {
    const conditions: ts.Expression[] = [ExpressionFactory.isArray(input)];

    const length: ts.Expression | null = check_array_length(input, tagList);
    if (length !== null) conditions.push(length);

    return conditions.reduce((x, y) => ts.factory.createLogicalAnd(x, y));
}
