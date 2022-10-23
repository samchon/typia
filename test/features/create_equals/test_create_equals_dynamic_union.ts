import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_dynamic_union = _test_equals(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.equals<DynamicUnion>(input),
);
