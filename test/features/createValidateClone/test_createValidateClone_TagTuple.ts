import typia from "../../../src";
import { TagTuple } from "../../structures/TagTuple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TagTuple = _test_validateClone(
    "TagTuple",
    TagTuple.generate,
    typia.createValidateClone<TagTuple>(),
    TagTuple.SPOILERS,
);
