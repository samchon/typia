import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ObjectAlias = _test_validateStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => TSON.validateStringify(input),
    ObjectAlias.SPOILERS,
);
