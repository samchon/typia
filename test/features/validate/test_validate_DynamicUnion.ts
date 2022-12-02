import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicUnion = _test_validate(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => TSON.validate(input),
    DynamicUnion.SPOILERS,
);
