import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createAssertStringify_ObjectGenericArray =
    _test_assertStringify(
        "ObjectGenericArray",
        ObjectGenericArray.generate,
        typia.createAssertStringify<ObjectGenericArray>(),
        ObjectGenericArray.SPOILERS,
    );
