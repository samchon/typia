import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createAssertClone_UltimateUnion = _test_assertClone(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createAssertClone<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);
