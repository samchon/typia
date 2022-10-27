import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_undefined = _test_is(
    "undefined object",
    ObjectUndefined.generate,
    TSON.createIs<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
