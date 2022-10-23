import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_undefined = _test_assert_equals(
    "undefined object",
    ObjectUndefied.generate,
    TSON.createAssertEquals<ObjectUndefied>(),
);
