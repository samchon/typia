import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert } from "./_test_assert";

export const test_assert_object_optional = _test_assert(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.assert(input),
    ObjectOptional.SPOILERS,
);
