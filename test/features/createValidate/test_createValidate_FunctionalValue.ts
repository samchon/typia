import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_validate_FunctionalValue = _test_validate(
    "FunctionalValue",
    FunctionalValue.generate,
    typia.createValidate<FunctionalValue>(),
);
