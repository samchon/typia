import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_is_UltimateUnion = _test_is(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.is(input),
    UltimateUnion.SPOILERS,
);
