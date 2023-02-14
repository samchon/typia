import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";

import { MetadataObject } from "../../metadata/MetadataObject";

import { ArrayUtil } from "../../utils/ArrayUtil";

import { prune_object_properties } from "../internal/prune_object_properties";
import { IExpressionEntry } from "./IExpressionEntry";

export namespace PruneJoiner {
    export const object = (
        _input: ts.Expression,
        entries: IExpressionEntry[],
        obj: MetadataObject,
    ): ts.ConciseBody => {
        const statements: ts.Statement[] = ArrayUtil.flat(
            entries.map((entry) =>
                ts.isBlock(entry.expression)
                    ? [...entry.expression.statements]
                    : [ts.factory.createExpressionStatement(entry.expression)],
            ),
        );
        statements.push(prune_object_properties(obj));
        return ts.factory.createBlock(statements, true);
    };

    export const array = (input: ts.Expression, arrow: ts.ArrowFunction) =>
        ts.factory.createCallExpression(
            IdentifierFactory.join(input, "forEach"),
            undefined,
            [arrow],
        );

    export const tuple = (
        children: ts.ConciseBody[],
        rest: ts.ConciseBody | null,
    ): ts.Block => {
        const entire: ts.ConciseBody[] = [...children];
        if (rest !== null) entire.push(rest);

        const statements: ts.Statement[] = ArrayUtil.flat(
            entire.map((elem) =>
                ts.isBlock(elem)
                    ? [...elem.statements]
                    : [ts.factory.createExpressionStatement(elem)],
            ),
        );
        return ts.factory.createBlock(statements, true);
    };
}
