import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_validate_FunctionalArray = _test_validate<FunctionalArray>(
    FunctionalArray,
)((input) => typia.validate(input));
