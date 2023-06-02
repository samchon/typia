import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createValidate_FunctionalValueUnion = _test_validate(
    "FunctionalValueUnion",
    FunctionalValueUnion.generate,
    typia.createValidate<FunctionalValueUnion>(),
    FunctionalValueUnion.SPOILERS,
);
