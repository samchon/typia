import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_dynamic_union = _test_assert_equals(
    "dynamic union",
    DynamicUnion.generate,
    (input) => TSON.assertEquals<DynamicUnion>(input),
);
