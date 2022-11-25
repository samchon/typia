import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_dynamic_composite = _test_assert_stringify(
    "dynamic composite",
    DynamicComposite.generate,
    (input) => TSON.assertStringify(input),
    DynamicComposite.SPOILERS,
);
