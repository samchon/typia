import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_is } from "./_test_is";

export const test_is_object_undefined = _test_is(
    "undefined object",
    ObjectUndefined.generate,
    (input) => TSON.is(input),
    ObjectUndefined.SPOILERS,
);
