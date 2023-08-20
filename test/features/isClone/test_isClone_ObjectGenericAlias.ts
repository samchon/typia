import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_isClone_ObjectGenericAlias = _test_isClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.isClone<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
