import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_generic_array =
    _test_assert_equals(
        "generic arraied object",
        ObjectGenericArray.generate,
        TSON.createAssertEquals<ObjectGenericArray>(),
    );
