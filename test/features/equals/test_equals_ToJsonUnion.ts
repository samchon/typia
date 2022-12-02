import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonUnion = _test_equals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => TSON.equals(input),
);
