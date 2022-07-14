import TSON from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validate } from "./_test_validate";

export const test_validate_array_hierarchical = _test_validate(
    "hierarchical array",
    ArrayHierarchical.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input[0].serial = "number" as any;
    //         return ["$input[0].serial"];
    //     },
    //     (input) => {
    //         input[0].departments[0].code = 3 as any as string;
    //         return ["$input[0].departments[0].code"];
    //     },
    //     (input) => {
    //         input[0].departments[0].employees[0].grade = "number" as any;
    //         return ["$input[0].departments[0].employees[0].grade"];
    //     },
    //     (input) => {
    //         input[0].departments[0].created_at.zone = "number" as any;
    //         return ["$input[0].departments[0].created_at.zone"];
    //     },
    //     (input) => {
    //         input[0].departments[0].employees[0] = {} as any;
    //         return ["$input[0].departments[0].employees[0].id"];
    //     },
    // ],
);
