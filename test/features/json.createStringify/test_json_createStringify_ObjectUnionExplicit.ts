import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_json_stringify_ObjectUnionExplicit = _test_json_stringify(
    "ObjectUnionExplicit",
    ObjectUnionExplicit.generate,
    typia.json.createStringify<ObjectUnionExplicit>(),
);
