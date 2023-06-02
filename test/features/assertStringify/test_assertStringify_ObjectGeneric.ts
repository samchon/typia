import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertStringify_ObjectGeneric = _test_assertStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.assertStringify(input),
    ObjectGeneric.SPOILERS,
);
