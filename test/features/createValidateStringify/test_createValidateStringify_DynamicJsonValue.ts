import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_createValidateStringify_DynamicJsonValue = _test_validateStringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createValidateStringify<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
