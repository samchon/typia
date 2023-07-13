import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_json_isParse_ObjectPrimitive = _test_json_isParse(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    (input) => typia.json.isParse<ObjectPrimitive>(input),
    ObjectPrimitive.SPOILERS,
);
