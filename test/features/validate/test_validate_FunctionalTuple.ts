import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_validate_FunctionalTuple = _test_validate<FunctionalTuple>(
    FunctionalTuple,
)((input) => typia.validate(input));
