import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_object_generic = _test_equals(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.equals(input),
);
