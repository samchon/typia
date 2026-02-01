//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IComputable } from "./IComputable";
import { INegatable } from "./INegatable";

type PlusParam<Y, Ret> = number | string | Pick<IComputable<Y, Ret>, "plus">;
type Param<Y, Ret, Key extends keyof IComputable<Y, Ret>> =
  | number
  | Pick<IComputable<Y, Ret>, Key>;

/* ---------------------------------------------------------
    PLUS
--------------------------------------------------------- */
export function plus<X extends PlusParam<Y, Ret>, Y = X, Ret = X>(
  x: X,
  y: Y,
): Ret {
  if ((x as Partial<IComputable<Y, Ret>>).plus instanceof Function)
    return (x as Partial<IComputable<Y, Ret>>).plus!(y);
  else return <any>x + y;
}

export function minus<X extends Param<Y, Ret, "minus">, Y = X, Ret = X>(
  x: X,
  y: Y,
): Ret {
  if ((x as Partial<IComputable<Y, Ret>>).minus instanceof Function)
    return (x as Partial<IComputable<Y, Ret>>).minus!(y);
  else return (<any>x - <any>y) as any;
}

export function negate<X extends number | INegatable<Ret>, Ret = X>(x: X): Ret {
  if ((x as INegatable<Ret>).negate instanceof Function)
    return (x as INegatable<Ret>).negate();
  else return <any>-x;
}

/* ---------------------------------------------------------
    MULTIPLY
--------------------------------------------------------- */
export function multiplies<
  X extends Param<Y, Ret, "multiplies">,
  Y = X,
  Ret = X,
>(x: X, y: Y): Ret {
  if ((x as Partial<IComputable<Y, Ret>>).multiplies instanceof Function)
    return (x as Partial<IComputable<Y, Ret>>).multiplies!(y);
  else return <any>(<any>x * <any>y);
}

export function divides<X extends Param<Y, Ret, "divides">, Y = X, Ret = X>(
  x: X,
  y: Y,
): Ret {
  if ((x as Partial<IComputable<Y, Ret>>).divides instanceof Function)
    return (x as Partial<IComputable<Y, Ret>>).divides!(y);
  else return <any>(<any>x / <any>y);
}

export function modules<X extends Param<Y, Ret, "modules">, Y = X, Ret = X>(
  x: X,
  y: Y,
): Ret {
  if ((x as Partial<IComputable<Y, Ret>>).modules instanceof Function)
    return (x as Partial<IComputable<Y, Ret>>).modules!(y);
  else return <any>(<any>x % <any>y);
}
