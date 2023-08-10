import typia from "../../../src";
import { _test_misc_literals } from "../../internal/_test_misc_literals";

export const test_misc_literals_WithNull = _test_misc_literals("WithNull")(() =>
    typia.misc.literals<"A" | "B" | null>(),
)(["A", "B", null]);
