import TSON from "../../../src";
import { _test_clone } from "./_test_clone";

export const test_clone_null = _test_clone(
    "null",
    () => null,
    (input) => TSON.clone(input),
);
