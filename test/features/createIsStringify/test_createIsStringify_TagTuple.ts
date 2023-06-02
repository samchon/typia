import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TagTuple } from "../../structures/TagTuple";

export const test_createIsStringify_TagTuple = _test_isStringify(
    "TagTuple",
    TagTuple.generate,
    typia.createIsStringify<TagTuple>(),
    TagTuple.SPOILERS,
);
