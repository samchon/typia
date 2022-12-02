import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicTemplate = _test_assertStringify(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => TSON.assertStringify(input),
    DynamicTemplate.SPOILERS,
);
