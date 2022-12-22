import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ArraySimple = _test_equals(
    "ArraySimple",
    ArraySimple.generate,
    typia.createEquals<ArraySimple>(),
);
