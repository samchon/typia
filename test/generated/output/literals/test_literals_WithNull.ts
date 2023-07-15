import typia from "../../../../src";
import { _test_literals } from "../../../internal/_test_literals";

export const test_literals_WithNull = _test_literals(
    "WithNull",
    () => ["A", "B", null] as const,
    ["A", "B", null],
);
