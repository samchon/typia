import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createIsClone_DynamicEnumeration = _test_isClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createIsClone<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
