import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertClone_ObjectGeneric = _test_assertClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.assertClone<ObjectGeneric>(input),
    ObjectGeneric.SPOILERS,
);
