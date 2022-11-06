import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_class_closure =
    _test_assert_clone(
        "class closure",
        ClassGetter.generate,
        TSON.createAssertClone<ClassGetter>(),
        ClassGetter.SPOILERS,
    );
