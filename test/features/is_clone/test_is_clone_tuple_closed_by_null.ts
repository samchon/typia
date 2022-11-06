import TSON from "../../../src";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_tuple_closed_by_null = _test_is_clone(
    "tuple closed by null",
    () => [1, 3, null] as const,
    (input) => TSON.isClone(input),
);
