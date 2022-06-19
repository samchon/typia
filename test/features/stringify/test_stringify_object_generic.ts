import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_object_generic = _test_stringify(
    "generic object",
    ObjectGeneric.generate(),
    (input) => TSON.stringify(input),
);
