import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_equals } from "./_test_equals";

export const test_equals_object_undefined = _test_equals(
    "undefined object",
    ObjectUndefined.generate,
    (input) => TSON.equals(input),
);
