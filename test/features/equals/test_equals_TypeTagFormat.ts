import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_equals_TypeTagFormat = _test_equals(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.equals<TypeTagFormat>(input));
