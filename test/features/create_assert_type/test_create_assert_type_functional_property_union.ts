import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_functional_property_union =
    _test_assert_type(
        "functional union property",
        FunctionalPropertyUnion.generate,
        TSON.createAssertType<FunctionalPropertyUnion>(),
        FunctionalPropertyUnion.SPOILERS,
    );
