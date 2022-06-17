import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is } from "./_test_is";

export const test_is_object_generic = _test_is(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.is(input),
);
