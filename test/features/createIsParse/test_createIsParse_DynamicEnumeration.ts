import typia from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_DynamicEnumeration = _test_isParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createIsParse<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
