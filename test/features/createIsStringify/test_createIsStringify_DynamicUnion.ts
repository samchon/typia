import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_createIsStringify_DynamicUnion = _test_isStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    typia.createIsStringify<DynamicUnion>(),
    DynamicUnion.SPOILERS,
);
