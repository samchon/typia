import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_is } from "./_test_is";

export const test_is_object_undefined = _test_is(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.is(input),
    ObjectUndefied.SPOILERS,
);
