import TSON from "../../../src";
import { TagStep } from "../../structures/TagStep";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TagStep = _test_assertStringify(
    "TagStep",
    TagStep.generate,
    (input) => TSON.assertStringify(input),
    TagStep.SPOILERS,
);