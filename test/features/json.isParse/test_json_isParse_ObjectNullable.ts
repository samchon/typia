import typia from "../../../src";
import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_isParse_ObjectNullable = _test_json_isParse(
    "ObjectNullable",
    ObjectNullable.generate,
    (input) => typia.json.isParse<ObjectNullable>(input),
    ObjectNullable.SPOILERS,
);
