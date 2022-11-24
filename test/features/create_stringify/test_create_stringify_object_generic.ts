import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_object_generic = _test_stringify(
    "generic object",
    ObjectGeneric.generate,
    TSON.createStringify<ObjectGeneric>(),
);
