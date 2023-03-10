import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createValidateEquals_FunctionalValue = _test_validateEquals(
    "FunctionalValue",
    FunctionalValue.generate,
    typia.createValidateEquals<FunctionalValue>(),
);
