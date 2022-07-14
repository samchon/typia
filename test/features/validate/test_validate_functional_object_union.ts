import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validate_for_of } from "./_test_validate_for_of";

export const test_validate_functional_object_union = _test_validate_for_of(
    "functional union object",
    FunctionalObjectUnion.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         if ((input as any).length) {
    //             (input as any).length = {} as any;
    //             return ["$input.length"];
    //         }
    //         (input as any).distance = [] as any;
    //         return ["$input.distance"];
    //     },
    // ],
);
