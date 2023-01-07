import typia from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalValue = _test_validate(
    "FunctionalValue",
    FunctionalValue.generate,
    typia.createValidate<FunctionalValue>(),
);