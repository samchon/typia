import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_validate } from "./_test_validate";

export const test_validate_functional_array = _test_validate(
    "functional array",
    FunctionalArray.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input[0] = null!;
    //         return ["$input[0]"];
    //     },
    //     (input) => {
    //         input[0] = undefined!;
    //         return ["$input[0]"];
    //     },
    //     (input) => {
    //         input[0] = "string" as any;
    //         return ["$input[0]"];
    //     },
    //     (input) => {
    //         input[0] = {} as any;
    //         return ["$input[0]"];
    //     },
    //     (input) => {
    //         input[0] = [] as any;
    //         return ["$input[0]"];
    //     },
    // ],
);
