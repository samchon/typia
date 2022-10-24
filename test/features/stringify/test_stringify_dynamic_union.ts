import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_dynamic_union = _test_stringify(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.stringify<DynamicUnion>(input),
);
