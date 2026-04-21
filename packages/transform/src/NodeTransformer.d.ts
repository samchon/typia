import { ITypiaContext } from "@typia/core";
import ts from "typescript";
/**
 * TypeScript AST node transformer.
 *
 * Delegates call expression nodes to {@link CallExpressionTransformer} for
 * potential `typia.*` function transformation. Non-call nodes pass through.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare namespace NodeTransformer {
    const transform: (props: {
        context: ITypiaContext;
        node: ts.Node;
    }) => ts.Node | null;
}
