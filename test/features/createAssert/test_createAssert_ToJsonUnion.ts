import TSON from "../../../src";
import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ToJsonUnion = _test_assert(
    "ToJsonUnion",
    ToJsonUnion.generate,
    TSON.createAssert<ToJsonUnion>(),
);