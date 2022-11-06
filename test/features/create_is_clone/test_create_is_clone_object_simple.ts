import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_simple = _test_is_clone(
    "simple object",
    ObjectSimple.generate,
    TSON.createIsClone<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
