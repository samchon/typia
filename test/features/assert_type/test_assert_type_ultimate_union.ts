import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_ultimate_union = _test_assert_type(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.assertType(input),
    UltimateUnion.SPOILERS,
);
