import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_is_TagObjectUnion = _test_is(
    "TagObjectUnion",
)<TagObjectUnion>(TagObjectUnion)(typia.createIs<TagObjectUnion>());
