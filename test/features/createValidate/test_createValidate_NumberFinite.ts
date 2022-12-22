import typia from "../../../src";
import { NumberFinite } from "../../structures/NumberFinite";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_NumberFinite = _test_validate(
    "NumberFinite",
    NumberFinite.generate,
    typia.createValidate<NumberFinite>(),
    NumberFinite.SPOILERS,
);