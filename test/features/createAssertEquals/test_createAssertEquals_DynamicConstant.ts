import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertEquals_DynamicConstant = _test_assertEquals(
    "DynamicConstant",
)<DynamicConstant>(DynamicConstant)(
    typia.createAssertEquals<DynamicConstant>(),
);
