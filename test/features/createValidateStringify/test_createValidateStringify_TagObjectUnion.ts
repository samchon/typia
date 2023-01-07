import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagObjectUnion = _test_validateStringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createValidateStringify<TagObjectUnion>(),
    TagObjectUnion.SPOILERS,
);