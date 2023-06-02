import typia from "../../../src";

import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validate } from "../../internal/_test_validate";

export const test_validate_FunctionalTupleUnion = _test_validate(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => typia.validate(input),
    FunctionalTupleUnion.SPOILERS,
);
