import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertClone_DynamicConstant = _test_assertClone(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createAssertClone<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
