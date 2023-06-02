import typia from "../../../src";

import { TagMatrix } from "../../structures/TagMatrix";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_TagMatrix = _test_stringify(
    "TagMatrix",
    TagMatrix.generate,
    typia.createStringify<TagMatrix>(),
);
