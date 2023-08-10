import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagArrayUnion } from "../../structures/TagArrayUnion";

export const test_assert_TagArrayUnion = _test_assert<TagArrayUnion>(
    TagArrayUnion,
)(typia.createAssert<TagArrayUnion>());
