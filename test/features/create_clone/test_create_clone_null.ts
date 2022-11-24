import TSON from "../../../src";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_null = _test_clone(
    "null",
    () => null,
    TSON.createClone<null>(),
);
