import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicEnumeration = _test_assertParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    TSON.createAssertParse<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);