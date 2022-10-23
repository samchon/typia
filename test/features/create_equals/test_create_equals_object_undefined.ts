import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_object_undefined = _test_equals(
    "undefined object",
    ObjectUndefied.generate,
    TSON.createEquals<ObjectUndefied>(),
);
