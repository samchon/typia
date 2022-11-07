import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert } from "./_test_assert";

export const test_assert_object_union_double = _test_assert(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.assert(input),
    ObjectUnionDouble.SPOILERS,
);
