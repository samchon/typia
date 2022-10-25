import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_object_undefined = _test_is_stringify(
    "undefined object",
    ObjectUndefied.generate,
    TSON.createIsStringify<ObjectUndefied>(),
    ObjectUndefied.SPOILERS,
);
