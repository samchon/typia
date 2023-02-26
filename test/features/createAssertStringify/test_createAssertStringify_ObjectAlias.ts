import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createAssertStringify_ObjectAlias = _test_assertStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createAssertStringify<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
