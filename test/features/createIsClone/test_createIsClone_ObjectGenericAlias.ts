import typia from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectGenericAlias = _test_isClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createIsClone<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
