import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_is } from "./_test_is";

export const test_is_ultimate_union = _test_is(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].components.schemas = 0 as any),
        (input) => (input[1].components.schemas = null!),
        (input) => (input[2].components.schemas = undefined!),
    ],
);
