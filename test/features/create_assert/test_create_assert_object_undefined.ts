import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_undefined = _test_assert(
    "undefined object",
    ObjectUndefined.generate,
    TSON.createAssertType<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
