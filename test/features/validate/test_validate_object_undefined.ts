import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validate } from "./_test_validate";

export const test_validate_object_undefined = _test_validate(
    "undefined object",
    ObjectUndefined.generate,
    (input) => TSON.validate(input),
    ObjectUndefined.SPOILERS,
);
