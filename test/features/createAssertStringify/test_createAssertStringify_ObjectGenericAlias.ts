import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertStringify_ObjectGenericAlias =
    _test_assertStringify(
        "ObjectGenericAlias",
        ObjectGenericAlias.generate,
        typia.createAssertStringify<ObjectGenericAlias>(),
        ObjectGenericAlias.SPOILERS,
    );
