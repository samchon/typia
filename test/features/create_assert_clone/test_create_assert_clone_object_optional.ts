import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_optional = _test_assert_clone(
    "optional object",
    ObjectOptional.generate,
    TSON.createAssertClone<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
