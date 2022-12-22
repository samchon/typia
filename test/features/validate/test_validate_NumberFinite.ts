import typia from "../../../src";
import { NumberFinite } from "../../structures/NumberFinite";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_NumberFinite = _test_validate(
    "NumberFinite",
    NumberFinite.generate,
    (input) => typia.validate(input),
    NumberFinite.SPOILERS,
);