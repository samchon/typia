import TSON from "../../../src";
import { DynamicUnion } from "../../structures/DynamicUnion";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_DynamicUnion = _test_isStringify(
    "DynamicUnion",
    DynamicUnion.generate,
    (input) => TSON.isStringify(input),
    DynamicUnion.SPOILERS,
);