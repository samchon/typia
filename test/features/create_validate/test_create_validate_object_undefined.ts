import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_object_undefined = _test_validate(
    "undefined object",
    ObjectUndefined.generate,
    TSON.createValidate<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
