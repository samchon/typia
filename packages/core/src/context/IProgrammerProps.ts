import ts from "typescript";

import { ITypiaContext } from "./ITypiaContext";

/**
 * Properties for typia code programmers.
 *
 * Passed to programmer functions that generate validation/serialization code.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IProgrammerProps {
  /** Typia transformation context. */
  context: ITypiaContext;

  /** Module expression (e.g., `typia`). */
  modulo: ts.LeftHandSideExpression;

  /** Target type to generate code for. */
  type: ts.Type;

  /** Optional type name for error messages. */
  name: string | undefined;

  /** Optional initial value expression. */
  init?: ts.Expression | undefined;
}
