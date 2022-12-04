import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TagRange = _test_validateStringify(
    "TagRange",
    TagRange.generate,
    (input) => TSON.validateStringify(input),
    TagRange.SPOILERS,
);
