import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createIsStringify_UltimateUnion = _test_isStringify(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createIsStringify<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
