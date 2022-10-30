import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_array_union = _test_validate(
    "union array",
    ArrayUnion.generate,
    (input) => TSON.validate(input),
    ArrayUnion.SPOILERS,
);
