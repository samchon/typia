import TSON from "../../../src";
import { ComplicateUnion } from "../../structures/ComplicateUnion";
import { _test_assert_for_of } from "./_test_assert_for_of";

export const test_assert_complicate_union = _test_assert_for_of(
    "union object",
    ComplicateUnion.generate,
    (input) => TSON.assertType(input),
);
