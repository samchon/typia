import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_DynamicJsonValue = _test_isClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.isClone(input),
    DynamicJsonValue.SPOILERS,
);
