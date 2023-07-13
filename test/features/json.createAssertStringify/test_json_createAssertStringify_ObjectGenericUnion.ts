import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_json_assertStringify_ObjectGenericUnion =
    _test_json_assertStringify(
        "ObjectGenericUnion",
        ObjectGenericUnion.generate,
        typia.json.createAssertStringify<ObjectGenericUnion>(),
        ObjectGenericUnion.SPOILERS,
    );
