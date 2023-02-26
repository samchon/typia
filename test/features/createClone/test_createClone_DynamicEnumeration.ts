import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createClone_DynamicEnumeration = _test_clone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createClone<DynamicEnumeration>(),
);
