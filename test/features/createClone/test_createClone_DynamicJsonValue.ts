import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_DynamicJsonValue = _test_clone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createClone<DynamicJsonValue>(),
);
