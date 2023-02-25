import typia from "../../../src";

import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalValueUnion = _test_validate(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    typia.createValidate<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);
