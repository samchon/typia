import TSON from "../../../src";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_null = _test_is_clone(
    "null",
    () => null,
    TSON.createIsClone<null>(),
);
