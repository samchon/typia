import typia from "../../../src";
import { _test_misc_literals } from "../../internal/_test_misc_literals";

export const test_misc_literals_WithStrings = _test_misc_literals(
    "WithStrings",
    () => typia.misc.literals<"A" | "B">(),
    ["A", "B"],
);
