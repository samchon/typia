import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_generic = _test_assert_stringify(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.assertStringify(input),
    ObjectGeneric.SPOILERS,
);
