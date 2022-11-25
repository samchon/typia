import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ArraySimple = _test_equals(
    "ArraySimple",
    ArraySimple.generate,
    TSON.createEquals<ArraySimple>(),
);