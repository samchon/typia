import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_union_double = _test_assert_stringify(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.assertStringify(input),
    ObjectUnionDouble.SPOILERS,
);
