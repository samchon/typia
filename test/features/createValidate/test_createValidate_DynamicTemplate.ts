import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_validate_DynamicTemplate = _test_validate(
    "DynamicTemplate",
    DynamicTemplate.generate,
    typia.createValidate<DynamicTemplate>(),
    DynamicTemplate.SPOILERS,
);
