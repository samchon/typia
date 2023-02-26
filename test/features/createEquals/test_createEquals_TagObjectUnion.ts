import typia from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TagObjectUnion = _test_equals(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createEquals<TagObjectUnion>(),
);
