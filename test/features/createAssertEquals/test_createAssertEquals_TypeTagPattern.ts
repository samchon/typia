import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_createAssertEquals_TypeTagPattern = _test_assertEquals(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)(typia.createAssertEquals<TypeTagPattern>());
