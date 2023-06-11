import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_isClone_ObjectAlias = _test_isClone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.isClone(input),
    ObjectAlias.SPOILERS,
);
