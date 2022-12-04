import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ObjectGenericAlias = _test_assertParse(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => TSON.assertParse<ObjectGenericAlias>(input),
    ObjectGenericAlias.SPOILERS,
);
