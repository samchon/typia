import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createValidateStringify_TagObjectUnion =
    _test_validateStringify(
        "TagObjectUnion",
        TagObjectUnion.generate,
        typia.createValidateStringify<TagObjectUnion>(),
        TagObjectUnion.SPOILERS,
    );
