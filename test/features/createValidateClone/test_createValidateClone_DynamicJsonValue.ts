import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createValidateClone_DynamicJsonValue = _test_validateClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createValidateClone<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
