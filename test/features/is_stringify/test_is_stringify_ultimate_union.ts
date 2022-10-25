import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_ultimate_union = _test_is_stringify(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.isStringify(input),
);
