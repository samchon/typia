import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagObjectUnion } from "../../structures/TagObjectUnion";

export const test_createAssertEquals_TagObjectUnion = _test_assertEquals(
    "TagObjectUnion",
    TagObjectUnion.generate,
    typia.createAssertEquals<TagObjectUnion>(),
);
