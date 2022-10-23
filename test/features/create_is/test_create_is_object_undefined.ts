import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_undefined = _test_is(
    "undefined object",
    ObjectUndefied.generate,
    TSON.createIs<ObjectUndefied>(),
    ObjectUndefied.SPOILERS,
);
