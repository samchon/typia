import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_assertStringify_ObjectGenericAlias =
    _test_json_assertStringify(
        "ObjectGenericAlias",
        ObjectGenericAlias.generate,
        typia.json.createAssertStringify<ObjectGenericAlias>(),
        ObjectGenericAlias.SPOILERS,
    );
