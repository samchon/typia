import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_optional = _test_assert(
    "optional object",
    ObjectOptional.generate,
    TSON.createAssertType<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
