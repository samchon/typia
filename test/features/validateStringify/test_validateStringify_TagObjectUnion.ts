import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_validateStringify_TagObjectUnion = _test_validateStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => typia.validateStringify<TagObjectUnion>(input),
    TagObjectUnion.SPOILERS,
);
