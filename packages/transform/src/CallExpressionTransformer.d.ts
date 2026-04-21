import { ITypiaContext } from "@typia/core";
import ts from "typescript";
/**
 * Transforms `typia.*` function call expressions.
 *
 * Routes typia function calls (e.g., `typia.is<T>()`, `typia.assert<T>()`) to
 * their corresponding transformers. Identifies calls by resolving the
 * declaration signature and matching against registered functor map.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export declare namespace CallExpressionTransformer {
    const transform: (props: {
        context: ITypiaContext;
        expression: ts.CallExpression;
    }) => ts.Expression | null;
}
