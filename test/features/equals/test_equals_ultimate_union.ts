import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_equals } from "./_test_equals";

export const test_equals_ultimate_union = _test_equals(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.equals(input),
);
