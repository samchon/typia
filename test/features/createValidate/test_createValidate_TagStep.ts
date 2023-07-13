import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { TagStep } from "../../structures/TagStep";

export const test_validate_TagStep = _test_validate(
    "TagStep",
    TagStep.generate,
    typia.createValidate<TagStep>(),
    TagStep.SPOILERS,
);
