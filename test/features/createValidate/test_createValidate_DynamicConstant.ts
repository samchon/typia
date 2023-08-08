import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_validate_DynamicConstant = _test_validate(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createValidate<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
