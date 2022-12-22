import typia from "../../../src";
import { NumberFinite } from "../../structures/NumberFinite";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_NumberFinite = _test_assertEquals(
    "NumberFinite",
    NumberFinite.generate,
    typia.createAssertEquals<NumberFinite>(),
);