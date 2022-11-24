import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_ultimate_union = _test_is_stringify(
    "ultimate union",
    UltimateUnion.generate,
    TSON.createIsStringify<UltimateUnion>(),
);
