import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_DynamicComposite = _test_assertStringify(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => TSON.assertStringify(input),
    DynamicComposite.SPOILERS,
);