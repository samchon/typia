import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_object_optional = _test_assert_stringify(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.assertStringify(input),
    ObjectOptional.SPOILERS,
);
