import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TagType } from "../../structures/TagType";

export const test_random_TagType = _test_random(
    "TagType",
    () => typia.random<TagType>(),
    typia.createAssert<TagType>(),
);
