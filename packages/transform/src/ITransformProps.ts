import { ITypiaContext } from "@typia/core";
import ts from "typescript";

<<<<<<< HEAD
export interface ITransformProps {
  context: ITypiaContext;
  modulo: ts.LeftHandSideExpression;
=======
/**
 * Properties for individual typia function transformation.
 *
 * Passed to each transformer handler when processing a `typia.*()` call.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface ITransformProps {
  /** Typia transformation context with type checker and utilities. */
  context: ITypiaContext;

  /** Module expression (e.g., `typia` in `typia.is<T>()`). */
  modulo: ts.LeftHandSideExpression;

  /** The original `typia.*<T>()` call expression being transformed. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  expression: ts.CallExpression;
}
