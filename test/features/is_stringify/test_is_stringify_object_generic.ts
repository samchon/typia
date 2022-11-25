import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_object_generic = _test_is_stringify(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.isStringify(input),
    ObjectGeneric.SPOILERS,
);
