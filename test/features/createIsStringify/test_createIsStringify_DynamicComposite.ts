import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createIsStringify_DynamicComposite = _test_isStringify(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createIsStringify<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
