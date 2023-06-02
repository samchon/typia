import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_DynamicJsonValue = _test_validateClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createValidateClone<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
