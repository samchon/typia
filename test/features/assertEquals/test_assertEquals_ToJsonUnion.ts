import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ToJsonUnion = _test_assertEquals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => TSON.assertEquals(input),
);