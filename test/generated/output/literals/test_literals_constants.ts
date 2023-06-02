import typia from "../../../../src";
import { primitive_equal_to } from "../../../helpers/primitive_equal_to";

export function test_literals_constants(): void {
    const values = [1, 3, 2, "A", "B"] as const;
    if (!primitive_equal_to(values.slice().sort(), ["A", "B", 1, 2, 3].sort()))
        throw Error(
            "Bug on typia.literals(): failed to understand constant type.",
        );
}
type Values = "A" | "B" | 1 | 2 | 3;
