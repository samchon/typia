import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_assert_TagInfinite = _test_assert<TagInfinite>(TagInfinite)(
    typia.createAssert<TagInfinite>(),
);
