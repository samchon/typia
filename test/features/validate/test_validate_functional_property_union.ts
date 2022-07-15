import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validate_for_of } from "./_test_validate_for_of";

export const test_validate_functional_property_union = _test_validate_for_of(
    "functional union property",
    FunctionalPropertyUnion.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input.closure = {} as any;
            return ["$input.closure"];
        },
        (input) => {
            input.closure = [] as any;
            return ["$input.closure"];
        },
    ],
);
