import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_dynamic_composite = _test_assert_equals(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.assertEquals(input),
);
