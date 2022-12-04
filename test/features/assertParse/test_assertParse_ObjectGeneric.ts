import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectGeneric = _test_assertParse(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => TSON.assertParse<ObjectGeneric>(input),
    ObjectGeneric.SPOILERS,
);
