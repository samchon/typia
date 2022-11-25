import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_array_any = _test_stringify(
    "any array",
    ArrayAny.generate,
    (input) => TSON.stringify(input),
);
