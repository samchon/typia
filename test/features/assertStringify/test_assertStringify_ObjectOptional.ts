import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectOptional = _test_assertStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => TSON.assertStringify(input),
    ObjectOptional.SPOILERS,
);
