import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_ultimate_union = _test_stringify(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.stringify(input),
);
