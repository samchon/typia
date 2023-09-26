import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_misc_createClone_DynamicEnumeration = _test_misc_clone(
    "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)(
    typia.misc.createClone<DynamicEnumeration>(),
);
