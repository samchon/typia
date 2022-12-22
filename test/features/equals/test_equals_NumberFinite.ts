import typia from "../../../src";
import { NumberFinite } from "../../structures/NumberFinite";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_NumberFinite = _test_equals(
    "NumberFinite",
    NumberFinite.generate,
    (input) => typia.equals(input),
);