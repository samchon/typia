import TSON from "../../../src";
import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_object_undefined = _test_is_stringify(
    "undefined object",
    ObjectUndefined.generate,
    (input) => TSON.isStringify(input),
    ObjectUndefined.SPOILERS,
);
