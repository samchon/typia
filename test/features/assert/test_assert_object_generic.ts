import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assert } from "./_test_assert";

export const test_assert_object_generic = _test_assert(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.assertType(input),
);
