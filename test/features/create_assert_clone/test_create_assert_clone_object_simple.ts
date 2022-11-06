import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_simple =
    _test_assert_clone(
        "simple object",
        ObjectSimple.generate,
        TSON.createAssertClone<ObjectSimple>(),
        ObjectSimple.SPOILERS,
    );
