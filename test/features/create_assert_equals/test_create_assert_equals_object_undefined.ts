import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assert_equals } from "../internal/_test_assert_equals";

export const test_create_assert_equals_object_undefined = _test_assert_equals(
    "undefined object",
    ObjectUndefined.generate,
    TSON.createAssertEquals<ObjectUndefined>(),
);
