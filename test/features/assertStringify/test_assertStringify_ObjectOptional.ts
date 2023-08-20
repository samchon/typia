import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertStringify_ObjectOptional = _test_assertStringify(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.assertStringify<ObjectOptional>(input),
    ObjectOptional.SPOILERS,
);
