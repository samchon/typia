import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_is } from "../internal/_test_is";

export const test_create_is_class_non_public = _test_is(
    "non-public class member",
    ClassNonPublic.generate,
    TSON.createIs<ClassNonPublic>(),
    ClassNonPublic.SPOILERS,
);
