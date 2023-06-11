import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createAssertStringify_ObjectHierarchical =
    _test_assertStringify(
        "ObjectHierarchical",
        ObjectHierarchical.generate,
        typia.createAssertStringify<ObjectHierarchical>(),
        ObjectHierarchical.SPOILERS,
    );
