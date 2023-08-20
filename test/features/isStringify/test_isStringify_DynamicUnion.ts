import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_isStringify_DynamicUnion = _test_isStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => typia.isStringify<DynamicUnion>(input),
    DynamicUnion.SPOILERS,
);
