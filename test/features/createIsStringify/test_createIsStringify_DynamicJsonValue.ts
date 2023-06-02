import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_createIsStringify_DynamicJsonValue = _test_isStringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createIsStringify<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
