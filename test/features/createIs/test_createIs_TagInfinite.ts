import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagInfinite } from "../../structures/TagInfinite";

export const test_is_TagInfinite = _test_is(
    "TagInfinite",
    TagInfinite.generate,
    typia.createIs<TagInfinite>(),
    TagInfinite.SPOILERS,
);
