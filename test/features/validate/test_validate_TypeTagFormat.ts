import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_validate_TypeTagFormat = _test_validate(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)((input) => typia.validate<TypeTagFormat>(input));
