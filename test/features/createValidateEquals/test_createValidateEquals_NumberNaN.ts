import typia from "../../../src";
import { NumberNaN } from "../../structures/NumberNaN";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_NumberNaN = _test_validateEquals(
    "NumberNaN",
    NumberNaN.generate,
    typia.createValidateEquals<NumberNaN>(),
);