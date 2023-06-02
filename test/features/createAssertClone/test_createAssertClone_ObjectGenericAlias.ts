import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_createAssertClone_ObjectGenericAlias = _test_assertClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    typia.createAssertClone<ObjectGenericAlias>(),
    ObjectGenericAlias.SPOILERS,
);
