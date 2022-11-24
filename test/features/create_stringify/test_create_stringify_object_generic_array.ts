import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_create_stringify_object_generic_array = _test_stringify(
    "generic arraied object",
    ObjectGenericArray.generate,
    TSON.createStringify<ObjectGenericArray>(),
);
