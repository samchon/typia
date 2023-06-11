import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_createIsStringify_ObjectAlias = _test_isStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    typia.createIsStringify<ObjectAlias>(),
    ObjectAlias.SPOILERS,
);
