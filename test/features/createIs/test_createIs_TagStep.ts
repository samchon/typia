import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TagStep } from "../../structures/TagStep";

export const test_createIs_TagStep = _test_is(
    "TagStep",
    TagStep.generate,
    typia.createIs<TagStep>(),
    TagStep.SPOILERS,
);
