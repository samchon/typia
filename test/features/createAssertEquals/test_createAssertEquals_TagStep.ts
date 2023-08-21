import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TagStep } from "../../structures/TagStep";

export const test_assertEquals_TagStep = _test_assertEquals("TagStep")<TagStep>(
    TagStep,
)(typia.createAssertEquals<TagStep>());
