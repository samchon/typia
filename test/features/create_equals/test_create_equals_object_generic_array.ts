import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_object_generic_array = _test_equals(
    "generic arraied object",
    ObjectGenericArray.generate,
    TSON.createEquals<ObjectGenericArray>(),
);
