import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_ultimate_union = _test_clone(
    "ultimate union",
    UltimateUnion.generate,
    TSON.createClone<UltimateUnion>(),
);
