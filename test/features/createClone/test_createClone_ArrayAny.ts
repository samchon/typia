import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ArrayAny = _test_clone(
    "ArrayAny",
    ArrayAny.generate,
    TSON.createClone<ArrayAny>(),
);
