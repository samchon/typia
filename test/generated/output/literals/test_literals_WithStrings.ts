import typia from "../../../../src";
import { _test_literals } from "../../../internal/_test_literals";

export const test_literals_WithStrings = _test_literals(
    "WithStrings",
    () => ["A", "B"] as const,
    ["A", "B"],
);
