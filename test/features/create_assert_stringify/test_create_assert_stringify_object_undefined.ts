import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_undefined =
    _test_assert_stringify(
        "undefined object",
        ObjectUndefied.generate,
        TSON.createAssertStringify<ObjectUndefied>(),
        ObjectUndefied.SPOILERS,
    );
