import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_is } from "../../internal/_test_is";

export const test_is_DynamicJsonValue = _test_is(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.is(input),
    DynamicJsonValue.SPOILERS,
);
