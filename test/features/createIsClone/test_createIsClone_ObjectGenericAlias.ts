import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createIsClone_ObjectGenericAlias = _test_isClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createIsClone<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
