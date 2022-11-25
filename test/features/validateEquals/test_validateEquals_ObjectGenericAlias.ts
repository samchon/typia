import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectGenericAlias = _test_validateEquals(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => TSON.validateEquals(input),
);