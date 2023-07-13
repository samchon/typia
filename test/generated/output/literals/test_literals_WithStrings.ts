import typia from "../../../../src";
import { _test_misc_literals } from "../../../internal/_test_misc_literals";

const areArraysEqual = <T>(a: readonly T[], b: readonly T[]): boolean =>
    a.length === b.length && a.every((elem, i) => elem === b[i]);
export const test_literals_WithStrings = _test_misc_literals(
    "WithStrings",
    () => "A" as "A" | "B",
    (input) => areArraysEqual(["A", "B"] as const, ["A", "B"]),
);
