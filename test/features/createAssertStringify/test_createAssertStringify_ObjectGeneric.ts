import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_createAssertStringify_ObjectGeneric = _test_assertStringify(
    "ObjectGeneric",
    ObjectGeneric.generate,
    typia.createAssertStringify<ObjectGeneric>(),
    ObjectGeneric.SPOILERS,
);
