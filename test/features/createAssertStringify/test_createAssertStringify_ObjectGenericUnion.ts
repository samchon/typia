import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createAssertStringify_ObjectGenericUnion =
    _test_assertStringify(
        "ObjectGenericUnion",
        ObjectGenericUnion.generate,
        typia.createAssertStringify<ObjectGenericUnion>(),
        ObjectGenericUnion.SPOILERS,
    );
