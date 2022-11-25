import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_dynamic_composite = _test_assert_type(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.assertType(input),
    DynamicComposite.SPOILERS,
);
