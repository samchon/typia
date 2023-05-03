import typia from "../../../src";
import { primitive_equal_to } from "../../helpers/primitive_equal_to";

export function test_literals_enumeration(): void {
    const values = typia.literals<TestEnum>();
    if (!primitive_equal_to(values.slice().sort(), ["A", "B", 1, 2, 3].sort()))
        throw Error(
            "Bug on typia.literals(): failed to understand enumeration type.",
        );
}

enum TestEnum {
    A = "A",
    B = "B",
    one = 1,
    two = 2,
    three = 3,
}
