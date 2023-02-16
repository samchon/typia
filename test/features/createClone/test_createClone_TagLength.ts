import typia from "typia";

import { TagLength } from "../../structures/TagLength";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TagLength = _test_clone(
    "TagLength",
    TagLength.generate,
    typia.createClone<TagLength>(),
);
