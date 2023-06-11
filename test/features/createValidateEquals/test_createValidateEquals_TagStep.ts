import typia from "../../../src";

import { TagStep } from "../../structures/TagStep";
import { _test_validateEquals } from "../../internal/_test_validateEquals";

export const test_createValidateEquals_TagStep = _test_validateEquals(
    "TagStep",
    TagStep.generate,
    typia.createValidateEquals<TagStep>(),
);
