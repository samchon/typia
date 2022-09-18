import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_generic = _test_assert_equals(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.assertEquals(input),
);
