import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_dynamic_union = _test_validate(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.validate(input),
    DynamicUnion.SPOILERS,
);
