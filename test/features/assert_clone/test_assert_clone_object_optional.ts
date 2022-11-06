import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_optional = _test_assert_clone(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.assertClone(input),
    ObjectOptional.SPOILERS,
);
