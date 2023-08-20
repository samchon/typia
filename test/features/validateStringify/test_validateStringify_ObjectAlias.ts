import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_validateStringify_ObjectAlias = _test_validateStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.validateStringify<ObjectAlias>(input),
    ObjectAlias.SPOILERS,
);
