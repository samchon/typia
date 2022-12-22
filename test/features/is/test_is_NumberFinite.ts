import typia from "../../../src";
import { NumberFinite } from "../../structures/NumberFinite";
import { _test_is } from "../internal/_test_is";

export const test_is_NumberFinite = _test_is(
    "NumberFinite",
    NumberFinite.generate,
    (input) => typia.is(input),
    NumberFinite.SPOILERS,
);