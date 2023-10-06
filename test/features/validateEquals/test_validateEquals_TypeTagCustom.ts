import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_validateEquals_TypeTagCustom = _test_validateEquals(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)((input) => typia.validateEquals<TypeTagCustom>(input));
