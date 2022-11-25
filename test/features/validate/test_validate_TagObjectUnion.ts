import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_TagObjectUnion = _test_validate(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => TSON.validate(input),
    TagObjectUnion.SPOILERS,
);