import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_simple = _test_is(
    "simple object",
    ObjectSimple.generate,
    TSON.createIs<ObjectSimple>(),
    ObjectSimple.SPOILERS,
);
