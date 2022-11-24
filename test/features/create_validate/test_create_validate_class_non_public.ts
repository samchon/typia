import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_class_non_public = _test_validate(
    "non-public class member",
    ClassNonPublic.generate,
    TSON.createValidate<ClassNonPublic>(),
    ClassNonPublic.SPOILERS,
);
