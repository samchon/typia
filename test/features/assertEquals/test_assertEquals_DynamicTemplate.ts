import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertEquals_DynamicTemplate = _test_assertEquals(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => typia.assertEquals(input),
);
