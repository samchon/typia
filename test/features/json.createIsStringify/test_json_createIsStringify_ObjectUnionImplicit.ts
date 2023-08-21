import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_json_isStringify_ObjectUnionImplicit = _test_json_isStringify(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(ObjectUnionImplicit)(
    typia.json.createIsStringify<ObjectUnionImplicit>(),
);
