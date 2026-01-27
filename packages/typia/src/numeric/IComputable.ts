//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { INegatable } from "./INegatable";

export interface IComputable<Param, Ret = Param> extends INegatable<Ret> {
  plus(val: Param): Ret;
  minus(val: Param): Ret;

  multiplies(val: Param): Ret;
  divides(val: Param): Ret;
  modules(val: Param): Ret;
}
