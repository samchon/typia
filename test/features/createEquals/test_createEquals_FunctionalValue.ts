import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_createEquals_FunctionalValue = _test_equals(
    "FunctionalValue",
    FunctionalValue.generate,
    typia.createEquals<FunctionalValue>(),
);
