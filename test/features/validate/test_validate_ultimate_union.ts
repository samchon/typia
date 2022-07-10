import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_validate_for_of } from "./_test_validate_for_of";

export const test_validate_ultimate_union = _test_validate_for_of(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.validate(input),
    // GIVE UP, SOMEDAY LATER
);
