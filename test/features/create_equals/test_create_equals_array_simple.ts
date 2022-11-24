import TSON from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_array_simple = _test_equals(
    "simple array",
    ArraySimple.generate,
    TSON.createEquals<ArraySimple>(),
);
