import typia from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TagStep = _test_assertEquals(
    "TagStep",
    TagStep.generate,
    typia.createAssertEquals<TagStep>(),
);
