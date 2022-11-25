import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_DynamicComposite = _test_isStringify(
    "DynamicComposite",
    DynamicComposite.generate,
    TSON.createIsStringify<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
