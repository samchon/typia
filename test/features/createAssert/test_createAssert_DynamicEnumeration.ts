import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssert_DynamicEnumeration = _test_assert(
    "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)(
    typia.createAssert<DynamicEnumeration>(),
);
