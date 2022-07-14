import TSON from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validate } from "./_test_validate";

export const test_validate_functional_property = _test_validate(
    "functional property",
    FunctionalProperty.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input.name = 3 as any;
    //         return ["$input.name"];
    //     },
    //     (input) => {
    //         input.closure = "function" as any;
    //         return ["$input.closure"];
    //     },
    //     (input) => {
    //         input.closure = null!;
    //         return ["$input.closure"];
    //     },
    //     (input) => {
    //         input.closure = undefined!;
    //         return ["$input.closure"];
    //     },
    //     (input) => {
    //         input.closure = {} as any;
    //         return ["$input.closure"];
    //     },
    //     (input) => {
    //         input.closure = [] as any;
    //         return ["$input.closure"];
    //     },
    // ],
);
