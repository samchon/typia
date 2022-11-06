import TSON from "../../../src";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_null = _test_is_clone(
    "null",
    () => null,
    (input) => TSON.isClone(input),
);
