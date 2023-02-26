import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createIs_DynamicEnumeration = _test_is(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createIs<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
