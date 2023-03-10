import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createValidate_FunctionalArray = _test_validate(
    "FunctionalArray",
    FunctionalArray.generate,
    typia.createValidate<FunctionalArray>(),
    FunctionalArray.SPOILERS,
);
