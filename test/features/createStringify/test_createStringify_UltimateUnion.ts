import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_UltimateUnion = _test_stringify(
    "UltimateUnion",
    UltimateUnion.generate,
    TSON.createStringify<UltimateUnion>(),
);
