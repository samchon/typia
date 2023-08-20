import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_isClone_UltimateUnion = _test_isClone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.isClone<UltimateUnion>(input),
    UltimateUnion.SPOILERS,
);
