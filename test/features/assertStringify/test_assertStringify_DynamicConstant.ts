import TSON from "../../../src";
import { DynamicConstant } from "../../structures/DynamicConstant";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicConstant = _test_assertStringify(
    "DynamicConstant",
    DynamicConstant.generate,
    (input) => TSON.assertStringify(input),
    DynamicConstant.SPOILERS,
);
