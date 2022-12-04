import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TagPattern = _test_validateStringify(
    "TagPattern",
    TagPattern.generate,
    (input) => TSON.validateStringify(input),
    TagPattern.SPOILERS,
);
