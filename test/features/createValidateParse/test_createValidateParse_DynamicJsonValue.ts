import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createValidateParse_DynamicJsonValue = _test_validateParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createValidateParse<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
