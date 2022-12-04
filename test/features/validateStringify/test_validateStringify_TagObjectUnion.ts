import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TagObjectUnion = _test_validateStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => TSON.validateStringify(input),
    TagObjectUnion.SPOILERS,
);
