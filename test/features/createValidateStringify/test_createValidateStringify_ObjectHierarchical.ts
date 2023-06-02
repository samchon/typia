import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_createValidateStringify_ObjectHierarchical =
    _test_validateStringify(
        "ObjectHierarchical",
        ObjectHierarchical.generate,
        typia.createValidateStringify<ObjectHierarchical>(),
        ObjectHierarchical.SPOILERS,
    );
