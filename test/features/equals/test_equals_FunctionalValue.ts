import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_equals_FunctionalValue = _test_equals<FunctionalValue>(
    FunctionalValue,
)((input) => typia.equals(input));
