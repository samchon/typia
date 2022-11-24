import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_functional_object_union =
    _test_assert_type(
        "functional union object",
        FunctionalObjectUnion.generate,
        TSON.createAssertType<FunctionalObjectUnion>(),
        FunctionalObjectUnion.SPOILERS,
    );
