import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_DynamicComposite = _test_isStringify(
    "DynamicComposite",
    DynamicComposite.generate,
    (input) => TSON.isStringify(input),
    DynamicComposite.SPOILERS,
);