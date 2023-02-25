import typia from "../../../src";

import { TagInfinite } from "../../structures/TagInfinite";
import { _test_random } from "../internal/_test_random";

export const test_random_TagInfinite = _test_random(
    "TagInfinite",
    () => typia.random<TagInfinite>(),
    typia.createAssert<typia.Primitive<TagInfinite>>(),
);
