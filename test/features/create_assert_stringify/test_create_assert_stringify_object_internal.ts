import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_internal =
    _test_assert_stringify(
        "object internal",
        ObjectInternal.generate,
        TSON.createAssertStringify<ObjectInternal>(),
        ObjectInternal.SPOILERS,
    );
