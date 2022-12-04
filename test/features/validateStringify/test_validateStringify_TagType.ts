import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TagType = _test_validateStringify(
    "TagType",
    TagType.generate,
    (input) => TSON.validateStringify(input),
    TagType.SPOILERS,
);
