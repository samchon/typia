import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_TagTuple = _test_isStringify(
    "TagTuple",
    TagTuple.generate,
    typia.createIsStringify<TagTuple>(),
    TagTuple.SPOILERS,
);