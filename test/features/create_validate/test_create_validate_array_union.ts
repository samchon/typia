import TSON from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_array_union = _test_validate(
    "union array",
    ArrayUnion.generate,
    TSON.createValidate<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);
