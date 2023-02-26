import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createIsClone_UltimateUnion = _test_isClone(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createIsClone<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
