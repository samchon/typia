import typia from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_DynamicTemplate = _test_equals(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.equals(input),
);