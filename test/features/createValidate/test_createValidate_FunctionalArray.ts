import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalArray = _test_validate(
    "FunctionalArray",
    FunctionalArray.generate,
    TSON.createValidate<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);