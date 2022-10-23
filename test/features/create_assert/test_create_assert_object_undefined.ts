import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_undefined = _test_assert(
    "undefined object",
    ObjectUndefied.generate,
    TSON.createAssertType<ObjectUndefied>(),
    ObjectUndefied.SPOILERS,
);
