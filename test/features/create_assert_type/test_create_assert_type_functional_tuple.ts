import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_functional_tuple = _test_assert_type(
    "functional tuple",
    FunctionalTuple.generate,
    TSON.createAssertType<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);
