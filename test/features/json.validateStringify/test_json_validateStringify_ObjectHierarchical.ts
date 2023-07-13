import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_validateStringify_ObjectHierarchical =
    _test_json_validateStringify(
        "ObjectHierarchical",
        ObjectHierarchical.generate,
        (input) => typia.json.validateStringify(input),
        ObjectHierarchical.SPOILERS,
    );
