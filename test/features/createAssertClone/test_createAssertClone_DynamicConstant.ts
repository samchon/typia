import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_DynamicConstant = _test_assertClone(
    "DynamicConstant",
    DynamicConstant.generate,
    typia.createAssertClone<DynamicConstant>(),
    DynamicConstant.SPOILERS,
);
