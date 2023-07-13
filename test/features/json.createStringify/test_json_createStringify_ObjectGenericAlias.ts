import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_json_stringify_ObjectGenericAlias = _test_json_stringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.json.createStringify<ObjectGenericAlias>(),
);
