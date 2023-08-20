import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_isStringify_ObjectGenericAlias = _test_isStringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.isStringify<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
