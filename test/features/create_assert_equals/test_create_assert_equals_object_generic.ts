import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_generic = _test_assert_equals(
    "generic object",
    ObjectGeneric.generate,
    TSON.createAssertEquals<ObjectGeneric>(),
);
