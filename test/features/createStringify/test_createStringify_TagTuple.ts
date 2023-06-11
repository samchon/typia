import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TagTuple } from "../../structures/TagTuple";

export const test_createStringify_TagTuple = _test_stringify(
    "TagTuple",
    TagTuple.generate,
    typia.createStringify<TagTuple>(),
);
