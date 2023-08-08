import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_isStringify_ObjectNullable = _test_json_isStringify(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.json.createIsStringify<ObjectNullable>(),
    ObjectNullable.SPOILERS,
);
