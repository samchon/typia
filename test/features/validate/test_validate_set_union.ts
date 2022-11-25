import TSON from "../../../src";
import { SetUnion } from "../../structures/SetUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_set_union = _test_validate(
    "union set",
    SetUnion.generate,
    (input) => TSON.validate(input),
    SetUnion.SPOILERS,
);
