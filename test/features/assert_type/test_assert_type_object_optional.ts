import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_object_optional = _test_assert_type(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.assertType(input),
    ObjectOptional.SPOILERS,
);
