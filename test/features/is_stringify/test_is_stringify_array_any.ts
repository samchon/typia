import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_array_any = _test_is_stringify(
    "any array",
    ArrayAny.generate,
    (input) => TSON.isStringify(input),
    ArrayAny.SPOILERS,
);
