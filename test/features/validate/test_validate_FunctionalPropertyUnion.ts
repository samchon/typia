import typia from "../../../src";

import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_FunctionalPropertyUnion = _test_validate(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => typia.validate(input),
    FunctionalPropertyUnion.SPOILERS,
);
