import typia from "typia";

import { TagLength } from "../../structures/TagLength";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_TagLength = _test_stringify(
    "TagLength",
    TagLength.generate,
    typia.createStringify<TagLength>(),
);
