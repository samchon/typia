import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createAssertEquals_DynamicUnion = _test_assertEquals(
    "DynamicUnion",
)<DynamicUnion>(DynamicUnion)(typia.createAssertEquals<DynamicUnion>());
