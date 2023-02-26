import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_validateClone_UltimateUnion = _test_validateClone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.validateClone(input),
    UltimateUnion.SPOILERS,
);
