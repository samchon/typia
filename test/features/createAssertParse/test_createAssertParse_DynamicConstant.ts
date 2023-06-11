import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertParse_DynamicConstant = _test_assertParse(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createAssertParse<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
