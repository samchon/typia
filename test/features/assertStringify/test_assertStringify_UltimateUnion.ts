import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_assertStringify_UltimateUnion = _test_assertStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.assertStringify(input),
    UltimateUnion.SPOILERS,
);
