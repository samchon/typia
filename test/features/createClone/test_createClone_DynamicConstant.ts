import typia from "../../../src";

import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_DynamicConstant = _test_clone(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createClone<DynamicConstant>(),
);
