import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_class_non_public = _test_assert_type(
    "non-public class member",
    ClassNonPublic.generate,
    TSON.createAssertType<ClassNonPublic>(),
    ClassNonPublic.SPOILERS,
);
