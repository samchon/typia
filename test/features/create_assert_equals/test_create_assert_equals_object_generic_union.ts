import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_generic_union =
    _test_assert_equals(
        "generic unioned object",
        ObjectGenericUnion.generate,
        TSON.createAssertEquals<ObjectGenericUnion>(),
    );
