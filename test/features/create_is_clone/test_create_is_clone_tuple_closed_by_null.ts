import TSON from "../../../src";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_tuple_closed_by_null = _test_is_clone(
    "tuple closed by null",
    () => [1, 3, null] as const,
    TSON.createIsClone<readonly [1, 3, null]>(),
);
