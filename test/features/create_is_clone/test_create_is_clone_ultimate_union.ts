import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_ultimate_union = _test_is_clone(
    "ultimate union",
    UltimateUnion.generate,
    TSON.createIsClone<UltimateUnion>(),
);
