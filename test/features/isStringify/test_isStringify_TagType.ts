import TSON from "../../../src";
import { TagType } from "../../structures/TagType";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TagType = _test_isStringify(
    "TagType",
    TagType.generate,
    (input) => TSON.isStringify(input),
    TagType.SPOILERS,
);
