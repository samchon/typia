import typia from "../../../src";

import { TagTuple } from "../../structures/TagTuple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TagTuple = _test_stringify(
    "TagTuple",
    TagTuple.generate,
    typia.createStringify<TagTuple>(),
);
