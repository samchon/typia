import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_DynamicJsonValue = _test_validate(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.validate(input),
    DynamicJsonValue.SPOILERS,
);
