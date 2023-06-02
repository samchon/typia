import typia from "../../../src";

import { TagCustom } from "../../structures/TagCustom";
import { _test_random } from "../../internal/_test_random";

export const test_random_TagCustom = _test_random(
    "TagCustom",
    () => typia.random<TagCustom>(TagCustom.RANDOM),
typia.createAssert<typia.Primitive<TagCustom>>(),
);
