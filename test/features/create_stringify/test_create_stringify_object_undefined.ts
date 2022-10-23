import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_undefined = _test_stringify(
    "undefined object",
    ObjectUndefied.generate(),
    TSON.createStringify<ObjectUndefied>(),
);
