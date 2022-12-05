import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagObjectUnion =
    _test_validateStringify(
        "TagObjectUnion",
        TagObjectUnion.generate,
        TSON.createValidateStringify<TagObjectUnion>(),
        TagObjectUnion.SPOILERS,
    );
