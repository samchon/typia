import typia from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_DynamicConstant = _test_validateEquals(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => typia.validateEquals(input),
);