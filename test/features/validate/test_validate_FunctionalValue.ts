import typia from "typia";

import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_FunctionalValue = _test_validate(
    "FunctionalValue",
    FunctionalValue.generate,
    (input) => typia.validate(input),
);
