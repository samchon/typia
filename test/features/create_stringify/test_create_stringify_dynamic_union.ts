import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_dynamic_union = _test_stringify(
    "dynamic union",
    DynamicUnion.generate,
    TSON.createStringify<DynamicUnion>(),
);
