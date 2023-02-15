import typia from "typia";

import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_FunctionalProperty = _test_validate(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input) => typia.validate(input),
    FunctionalProperty.SPOILERS,
);
