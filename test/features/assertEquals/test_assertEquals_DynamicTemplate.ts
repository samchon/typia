import TSON from "../../../src";
import { DynamicTemplate } from "../../structures/DynamicTemplate";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_DynamicTemplate = _test_assertEquals(
    "DynamicTemplate",
    DynamicTemplate.generate,
    (input) => TSON.assertEquals(input),
);
