import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_validateStringify_ObjectHierarchical =
    _test_validateStringify(
        "ObjectHierarchical",
        ObjectHierarchical.generate,
        (input) => typia.validateStringify(input),
        ObjectHierarchical.SPOILERS,
    );
