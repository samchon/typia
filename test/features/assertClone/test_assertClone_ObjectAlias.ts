import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_assertClone_ObjectAlias = _test_assertClone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.assertClone(input),
    ObjectAlias.SPOILERS,
);
