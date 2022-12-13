import typia from "../../../src";
import { FunctionalValue } from "../../structures/FunctionalValue";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_FunctionalValue = _test_validateEquals(
    "FunctionalValue",
    FunctionalValue.generate,
    typia.createValidateEquals<FunctionalValue>(),
);
