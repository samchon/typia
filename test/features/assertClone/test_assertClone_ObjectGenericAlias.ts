import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_assertClone_ObjectGenericAlias = _test_assertClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.assertClone<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
