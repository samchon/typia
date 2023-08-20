import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_isStringify_UltimateUnion = _test_isStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.isStringify<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);
