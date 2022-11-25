import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_array_any = _test_validate(
    "any array",
    ArrayAny.generate,
    (input) => TSON.validate(input),
    ArrayAny.SPOILERS,
);
