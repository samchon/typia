import ts from "typescript";

import { ITypiaContext } from "./ITypiaContext";

/**
 * Properties passed to typia code programmers.
 *
 * `IProgrammerProps` contains all the information needed for programmer
 * functions to generate runtime validation, serialization, or transformation
 * code. Each programmer receives these props and produces TypeScript AST nodes
 * that implement the operation for the target type.
 *
 * The programmers are internal to typia's transformation system and are invoked
 * by the TypeScript transformer when processing `typia.*<T>()` function calls.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IProgrammerProps {
  /**
   * Typia transformation context.
   *
   * Contains TypeScript compiler APIs, transformation context, import manager,
   * and configuration options. Shared across all programmers.
   */
  context: ITypiaContext;

  /**
   * Module expression for typia references.
   *
   * The expression representing the typia module (typically the identifier
   * `typia`). Used when generating code that references typia internals.
   */
  modulo: ts.LeftHandSideExpression;

  /**
   * TypeScript type to generate code for.
   *
   * The resolved type from the generic parameter of the typia function call
   * (e.g., `T` from `typia.is<T>()`). Analyzed to generate appropriate
   * validation/serialization logic.
   */
  type: ts.Type;

  /**
   * Optional type name for error messages.
   *
   * Human-readable name for the type, used in generated error messages and
   * debug output. May be `undefined` for anonymous types.
   */
  name: string | undefined;

  /**
   * Optional initial value expression.
   *
   * For functions that take an input value (like `typia.is(value)`), this is
   * the expression representing that value. Used as the input to the generated
   * validation code.
   */
  init?: ts.Expression | undefined;
}
