import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_misc_isClone_ObjectGenericAlias = _test_misc_isClone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.misc.isClone(input),
    ObjectGenericAlias.SPOILERS,
);
