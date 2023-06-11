import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assert_DynamicTemplate = _test_assert(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.assert(input),
    DynamicTemplate.SPOILERS,
);
