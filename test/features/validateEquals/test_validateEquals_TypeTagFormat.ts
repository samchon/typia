import typia from "../../../src";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_validateEquals_TypeTagFormat = _test_validateEquals(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.validateEquals<TypeTagFormat>(input));
