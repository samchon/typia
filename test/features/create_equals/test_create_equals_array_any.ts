import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_equals } from "../equals/_test_equals";

export const test_equals_array_any = _test_equals(
    "any array",
    ArrayAny.generate,
    TSON.createEquals<ArrayAny>(),
);
