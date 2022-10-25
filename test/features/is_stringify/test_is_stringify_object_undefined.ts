import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_object_undefined = _test_is_stringify(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.isStringify(input),
    ObjectUndefied.SPOILERS,
);
