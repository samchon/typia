import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_stringify_for_of } from "./_test_stringify_for_of";

export const test_stringify_ultimate_union = _test_stringify_for_of(
    "ultimate union",
    UltimateUnion.generate(),
    (input) => TSON.stringify(input),
);
