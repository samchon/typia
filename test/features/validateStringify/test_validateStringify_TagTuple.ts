import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TagTuple } from "../../structures/TagTuple";

export const test_validateStringify_TagTuple = _test_validateStringify(
    "TagTuple",
    TagTuple.generate,
    (input) => typia.validateStringify<TagTuple>(input),
    TagTuple.SPOILERS,
);
