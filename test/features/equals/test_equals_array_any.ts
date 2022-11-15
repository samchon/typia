import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_equals } from "./_test_equals";

export const test_equals_array_any = _test_equals(
    "any array",
    ArrayAny.generate,
    (input) => TSON.equals(input),
);
