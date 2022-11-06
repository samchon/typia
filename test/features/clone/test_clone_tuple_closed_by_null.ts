import TSON from "../../../src";
import { _test_clone } from "./_test_clone";

export const test_clone_tuple_closed_by_null = _test_clone(
    "tuple closed by null",
    () => [1, 3, null] as const,
    (input) => TSON.clone(input),
);
