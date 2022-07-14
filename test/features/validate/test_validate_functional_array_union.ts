import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_validate_for_of } from "./_test_validate_for_of";

export const test_validate_functional_array_union = _test_validate_for_of(
    "functional union array",
    FunctionalArrayUnion.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input[0] = undefined!;
    //         return ["$input"];
    //     },
    //     (input) => {
    //         input[0] = {} as any;
    //         return ["$input"];
    //     },
    //     (input) => {
    //         input[0] = [] as any;
    //         return ["$input"];
    //     },
    // ],
);
