import typia from "../../../src";

import { TagLength } from "../../structures/TagLength";
import { _test_random } from "../../internal/_test_random";

export const test_random_TagLength = _test_random(
    "TagLength",
    () => typia.random<TagLength>(),
typia.createAssert<typia.Primitive<TagLength>>(),
);
