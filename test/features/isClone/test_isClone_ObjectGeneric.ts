import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_isClone_ObjectGeneric = _test_isClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.isClone(input),
    ObjectGeneric.SPOILERS,
);
