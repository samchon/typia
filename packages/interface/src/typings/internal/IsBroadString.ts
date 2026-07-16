/** Tests whether a string type contains an unconstrained template segment. */
export type IsBroadString<T extends string> = string extends T
  ? true
  : T extends `${infer _First}${infer Rest}`
    ? IsBroadString<Rest>
    : false;
