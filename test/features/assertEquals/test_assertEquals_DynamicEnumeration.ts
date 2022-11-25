import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_DynamicEnumeration = _test_assertEquals(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => TSON.assertEquals(input),
);