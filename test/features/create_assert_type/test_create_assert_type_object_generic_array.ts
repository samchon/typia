import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_object_generic_array = _test_assert_type(
    "generic arraied object",
    ObjectGenericArray.generate,
    TSON.createAssertType<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
