import typia from "../../../src";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validate } from "../../internal/_test_validate";

export const test_createValidate_DynamicTree = _test_validate(
    "DynamicTree",
    DynamicTree.generate,
    typia.createValidate<DynamicTree>(),
    DynamicTree.SPOILERS,
);
