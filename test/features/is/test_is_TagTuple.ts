import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagTuple } from "../../structures/TagTuple";

export const test_is_TagTuple = _test_is<TagTuple>(TagTuple)((input) =>
    typia.is<TagTuple>(input),
);
