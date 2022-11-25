import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectGenericAlias = _test_stringify(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => TSON.stringify(input),
);
