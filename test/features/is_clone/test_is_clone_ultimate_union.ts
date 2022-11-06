import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_ultimate_union = _test_is_clone(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.isClone(input),
);
