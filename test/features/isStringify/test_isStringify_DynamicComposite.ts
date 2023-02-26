import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_isStringify_DynamicComposite = _test_isStringify(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => typia.isStringify(input),
    DynamicComposite.SPOILERS,
);
