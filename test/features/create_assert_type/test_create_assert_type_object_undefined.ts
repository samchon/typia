import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_object_undefined = _test_assert_type(
    "undefined object",
    ObjectUndefined.generate,
    TSON.createAssertType<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
