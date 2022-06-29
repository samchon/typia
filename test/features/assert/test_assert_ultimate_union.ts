import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_ultimate_union = _test_assert_for_of(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.assertType(input),
);
