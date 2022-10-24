import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_object_optional =
    _test_assert_stringify(
        "optional object",
        ObjectOptional.generate,
        TSON.createAssertStringify<ObjectOptional>(),
        ObjectOptional.SPOILERS,
    );
