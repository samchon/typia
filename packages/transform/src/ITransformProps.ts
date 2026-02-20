import { ITypiaContext } from "@typia/core";
import ts from "typescript";

/**
 * Properties for individual typia function transformation.
 *
 * Passed to each transformer handler when processing a `typia.*()` call.
 */
export interface ITransformProps {
  /** Typia transformation context with type checker and utilities. */
  context: ITypiaContext;

  /** Module expression (e.g., `typia` in `typia.is<T>()`). */
  modulo: ts.LeftHandSideExpression;

  /** The original `typia.*<T>()` call expression being transformed. */
  expression: ts.CallExpression;
}
