import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_validateEquals_TypeTagPattern = _test_validateEquals(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)(typia.createValidateEquals<TypeTagPattern>());
