import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createIsStringify_ObjectGenericAlias = _test_isStringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createIsStringify<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
