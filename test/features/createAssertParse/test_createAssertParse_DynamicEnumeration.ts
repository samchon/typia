import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertParse_DynamicEnumeration = _test_assertParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createAssertParse<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
