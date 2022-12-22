import typia from "../../../src";
import { NumberFinite } from "../../structures/NumberFinite";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_NumberFinite = _test_assert(
    "NumberFinite",
    NumberFinite.generate,
    typia.createAssert<NumberFinite>(),
    NumberFinite.SPOILERS,
);