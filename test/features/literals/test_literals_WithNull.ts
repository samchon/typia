import typia from "../../../src";
import { _test_literals } from "../../internal/_test_literals";

export const test_literals_WithNull = _test_literals(
    "WithNull",
    () => typia.literals<"A" | "B" | null>(),
    ["A", "B", null],
);
