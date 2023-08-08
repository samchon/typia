import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_misc_isClone_UltimateUnion = _test_misc_isClone(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.misc.createIsClone<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
