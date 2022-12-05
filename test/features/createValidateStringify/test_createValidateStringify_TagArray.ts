import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TagArray = _test_validateStringify(
    "TagArray",
    TagArray.generate,
    TSON.createValidateStringify<TagArray>(),
    TagArray.SPOILERS,
);
