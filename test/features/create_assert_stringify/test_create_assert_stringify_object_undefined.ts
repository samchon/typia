import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_object_undefined =
    _test_assert_stringify(
        "undefined object",
        ObjectUndefined.generate,
        TSON.createAssertStringify<ObjectUndefined>(),
        ObjectUndefined.SPOILERS,
    );
