import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_createAssertStringify_ObjectHierarchical =
    _test_json_assertStringify("ObjectHierarchical")<ObjectHierarchical>(
        ObjectHierarchical,
    )(typia.json.createAssertStringify<ObjectHierarchical>());
