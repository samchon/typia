import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_createAssertEquals_TypeTagArray = _test_assertEquals(
    "TypeTagArray",
)<TypeTagArray>(TypeTagArray)(typia.createAssertEquals<TypeTagArray>());
