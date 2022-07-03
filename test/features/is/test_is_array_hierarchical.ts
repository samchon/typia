import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_is } from "./_test_is";

export const test_is_array_hierarchical = _test_is(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].serial = "number" as any),
        (input) => (input[0].departments[0].code = 3 as any as string),
        (input) =>
            (input[0].departments[0].employees[0].grade = "number" as any),
        (input) => (input[0].departments[0].created_at.zone = "number" as any),
        (input) => (input[0].departments[0].employees[0] = {} as any),
    ],
);
