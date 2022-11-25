import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_assert_equals_object_generic_array = _test_assert_equals(
    "generic arraied object",
    ObjectGenericArray.generate,
    (input) => TSON.assertEquals(input),
);
