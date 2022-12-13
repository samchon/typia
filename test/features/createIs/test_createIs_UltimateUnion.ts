import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_is } from "../internal/_test_is";

export const test_createIs_UltimateUnion = _test_is(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createIs<UltimateUnion>(),
    UltimateUnion.SPOILERS,
);