import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_validate } from "./_test_validate";

export const test_validate_object_undefined = _test_validate(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.validate(input),
    ObjectUndefied.SPOILERS,
);
