import typia from "../../../src";

import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_TagObjectUnion = _test_stringify(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createStringify<TagObjectUnion>(),
);
