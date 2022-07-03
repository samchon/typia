import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_is } from "./_test_is";

export const test_is_tuple_hierarchical = _test_is(
    "hierarchical tuple",
    TupleHierarchical.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0] = "boolean" as any),
        (input) => (input[1] = null!),
        (input) => (input[2] = { value: "number" } as any),
        (input) => (input[3][0] = "boolean" as any),
        (input) => (input[3][1] = undefined!),
        (input) => (input[3][2][0] = "number" as any),
        (input) => (input[3][2][1][0] = "boolean" as any),
        (input) => (input[3][2][1][1] = 0 as any),
        (input) => (input[4][0] = true as any),
        (input) => (input[4][1][0] = [] as any),
        (input) => (input[4][1][0][0] = { value: "string" } as any),
        (input) => (input[4][1][0][1] = "false" as any),
        (input) => (input[4][1][0][2][0][0] = "number" as any),
        (input) => (input[4][1][0][2][0][1] = "number" as any),
        (input) => (input[4][1][0][2][0][2][0] = "false" as any),
        (input) => (input[4][1][0][2][0][2][1] = { value: "string" } as any),
    ],
);
