import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssertEquals_TypeTagLength = _test_assertEquals(
    "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.createAssertEquals<TypeTagLength>());
