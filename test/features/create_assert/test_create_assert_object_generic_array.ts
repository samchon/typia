import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_object_generic_array = _test_assert(
    "generic arraied object",
    ObjectGenericArray.generate,
    TSON.createAssert<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
