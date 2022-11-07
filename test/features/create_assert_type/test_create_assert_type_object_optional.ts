import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_optional = _test_assert_type(
    "optional object",
    ObjectOptional.generate,
    TSON.createAssertType<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
