import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectInternal = _test_assert(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.assert(input),
    ObjectInternal.SPOILERS,
);
