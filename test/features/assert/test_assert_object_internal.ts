import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_object_internal = _test_assert(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.assert(input),
    ObjectInternal.SPOILERS,
);
