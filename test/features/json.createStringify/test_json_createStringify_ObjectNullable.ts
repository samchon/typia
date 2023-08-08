import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_stringify_ObjectNullable = _test_json_stringify(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.json.createStringify<ObjectNullable>(),
);
