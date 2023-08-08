import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_json_isParse_ObjectHierarchical = _test_json_isParse(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => typia.json.isParse<ObjectHierarchical>(input),
    ObjectHierarchical.SPOILERS,
);
