import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_stringify_DynamicJsonValue = _test_stringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.stringify(input),
);
