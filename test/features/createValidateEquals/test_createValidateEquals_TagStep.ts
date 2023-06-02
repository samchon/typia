import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TagStep } from "../../structures/TagStep";

export const test_createValidateEquals_TagStep = _test_validateEquals(
    "TagStep",
    TagStep.generate,
    typia.createValidateEquals<TagStep>(),
);
