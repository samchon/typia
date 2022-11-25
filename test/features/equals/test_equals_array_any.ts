import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_array_any = _test_equals(
    "any array",
    ArrayAny.generate,
    (input) => TSON.equals(input),
);
