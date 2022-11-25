import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_validate_equals_set_union = _test_validate_equals(
    "union set",
    SetUnion.generate,
    (input) => TSON.validateEquals(input),
    false,
);
