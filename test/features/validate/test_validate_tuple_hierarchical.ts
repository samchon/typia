import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validate } from "./_test_validate";

export const test_validate_tuple_hierarchical = _test_validate(
    "hierarchical tuple",
    TupleHierarchical.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input[0] = "boolean" as any;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = "undefined" as any;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = "number" as any;
            return ["$input[2]"];
        },
        (input) => {
            input[3][0] = "boolean" as any;
            return ["$input[3][0]"];
        },
        (input) => {
            input[3][1] = "null" as any;
            return ["$input[3][1]"];
        },
        (input) => {
            input[3][2][0] = "number" as any;
            return ["$input[3][2][0]"];
        },
        (input) => {
            input[3][2][1] = "array" as any;
            return ["$input[3][2][1]"];
        },
        (input) => {
            input[3][2][1][0] = "boolean" as any;
            return ["$input[3][2][1][0]"];
        },
        (input) => {
            input[3][2][1][1] = { value: "string" } as any;
            return ["$input[3][2][1][1]"];
        },
    ],
);
