import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_undefined = _test_validate(
    "undefined object",
    ObjectUndefied.generate,
    TSON.createValidate<ObjectUndefied>(),
    ObjectUndefied.SPOILERS,
);
