import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_clone } from "../../internal/_test_clone";

export const test_clone_DynamicJsonValue = _test_clone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.clone(input),
);
