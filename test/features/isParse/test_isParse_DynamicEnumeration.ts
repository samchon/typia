import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_isParse_DynamicEnumeration = _test_isParse(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.isParse<DynamicEnumeration>(input),
    DynamicEnumeration.SPOILERS,
);
