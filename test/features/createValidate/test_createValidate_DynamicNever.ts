import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createValidate_DynamicNever = _test_validate(
    "DynamicNever",
    DynamicNever.generate,
    typia.createValidate<DynamicNever>(),
    DynamicNever.SPOILERS,
);
