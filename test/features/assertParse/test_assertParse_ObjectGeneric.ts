import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertParse_ObjectGeneric = _test_assertParse(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.assertParse<ObjectGeneric>(input),
    ObjectGeneric.SPOILERS,
);
