import typia from "../../../src";

import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_DynamicSimple = _test_validate(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createValidate<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
