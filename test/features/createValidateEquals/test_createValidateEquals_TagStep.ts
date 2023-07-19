import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagStep } from "../../structures/TagStep";

export const test_validateEquals_TagStep = _test_validateEquals<TagStep>(
    TagStep,
)(typia.createValidateEquals<TagStep>());
