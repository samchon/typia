import typia from "typia";

import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalPropertyUnion = _test_validate(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    typia.createValidate<FunctionalPropertyUnion>(),
    FunctionalPropertyUnion.SPOILERS,
);
