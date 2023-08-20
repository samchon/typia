import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_validateClone_ObjectGenericAlias = _test_validateClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.validateClone<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
