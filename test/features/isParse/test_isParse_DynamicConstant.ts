import typia from "../../../src";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicConstant = _test_isParse(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.isParse<DynamicConstant>(input),
    DynamicConstant.SPOILERS,
);
