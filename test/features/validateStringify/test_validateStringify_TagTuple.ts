import TSON from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_TagTuple = _test_validateStringify(
    "TagTuple",
    TagTuple.generate,
    (input) => TSON.validateStringify(input),
    TagTuple.SPOILERS,
);
