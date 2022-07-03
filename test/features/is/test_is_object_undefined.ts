import TSON from "../../../src";
import { ObjectUndefied } from "../../structures/ObjectUndefied";
import { _test_is } from "./_test_is";

export const test_is_object_undefined = _test_is(
    "undefined object",
    ObjectUndefied.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].name = null!),
        (input) => (input[0].professor = null!),
        (input) => (input[0].classroom = null!),
        (input) => (input[0].grade = null!),
        (input) => (input[0].nothing = null!),
    ],
);
