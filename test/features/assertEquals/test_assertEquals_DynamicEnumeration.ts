import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assertEquals_DynamicEnumeration = _test_assertEquals(
    "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
    typia.assertEquals<DynamicEnumeration>(input),
);
