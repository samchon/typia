import TSON from "../../../src";
import { ComplicateUnion } from "../../structures/ComplicateUnion";
import { _test_is } from "./_test_is";

export const test_is_complicate_union = _test_is(
    "union object",
    ComplicateUnion.generate,
    (input) => TSON.is(input),
);
