import TSON from "../../../src";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_generic_array =
    _test_assert_stringify(
        "generic arraied object",
        ObjectGenericArray.generate,
        (input) => TSON.assertStringify(input),
        ObjectGenericArray.SPOILERS,
    );
