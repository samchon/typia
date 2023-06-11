import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_DynamicJsonValue = _test_validate(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createValidate<DynamicJsonValue>(),
    DynamicJsonValue.SPOILERS,
);
