import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_equals } from "./_test_equals";

export const test_equals_object_undefined = _test_equals(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.equals(input),
);
