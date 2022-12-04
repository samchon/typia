import TSON from "../../../src";
import { TagArray } from "../../structures/TagArray";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TagArray = _test_validateStringify(
    "TagArray",
    TagArray.generate,
    (input) => TSON.validateStringify(input),
    TagArray.SPOILERS,
);
