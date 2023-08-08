import typia from "../../../src";
import { _test_misc_literals } from "../../internal/_test_misc_literals";

const areArraysEqual = <T>(a: readonly T[], b: readonly T[]): boolean =>
    a.length === b.length && a.every((elem, i) => elem === b[i]);

export const test_literals_WithNull = _test_misc_literals(
    "WithNull",
    () => "A" as "A" | "B" | null,
    (input) => {
        const generatedArray = typia.misc.literals<typeof input>();
        return areArraysEqual(generatedArray, ["A", "B", null]);
    },
);
