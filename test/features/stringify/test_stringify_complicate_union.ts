import TSON from "../../../src";
import { ComplicateUnion } from "../../structures/ComplicateUnion";
import { _test_stringify_for_of } from "./_test_stringify_for_of";

export const test_stringify_complicate_union = _test_stringify_for_of(
    "union object",
    ComplicateUnion.generate(),
    (input) => TSON.stringify(input),
);
