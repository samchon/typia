import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_stringify_ObjectHierarchical =
    _test_json_stringify<ObjectHierarchical>(ObjectHierarchical)(
        typia.json.createStringify<ObjectHierarchical>(),
    );
