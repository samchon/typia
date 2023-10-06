import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_validate_TypeTagLength = _test_validate(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.validate<TypeTagLength>(input));
