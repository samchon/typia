import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_validateEquals_TypeTagRange = _test_validateEquals(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.createValidateEquals<TypeTagRange>());
