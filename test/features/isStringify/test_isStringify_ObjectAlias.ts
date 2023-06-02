import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_isStringify_ObjectAlias = _test_isStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.isStringify(input),
    ObjectAlias.SPOILERS,
);
