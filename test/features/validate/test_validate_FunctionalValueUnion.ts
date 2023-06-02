import typia from "../../../src";

import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_FunctionalValueUnion = _test_validate(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    (input) => typia.validate(input),
    FunctionalValueUnion.SPOILERS,
);
