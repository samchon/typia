import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_TagObjectUnion = _test_validate(
    "TagObjectUnion",
    TagObjectUnion.generate,
    TSON.createValidate<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);
