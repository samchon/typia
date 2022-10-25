import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_dynamic_union = _test_is_stringify(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.isStringify<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
