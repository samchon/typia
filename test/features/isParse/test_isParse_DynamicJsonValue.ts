import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_isParse_DynamicJsonValue = _test_isParse(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.isParse<DynamicJsonValue>(input),
    DynamicJsonValue.SPOILERS,
);
