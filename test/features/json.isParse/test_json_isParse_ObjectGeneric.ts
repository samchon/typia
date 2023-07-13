import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_json_isParse_ObjectGeneric = _test_json_isParse(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.json.isParse<ObjectGeneric>(input),
    ObjectGeneric.SPOILERS,
);
