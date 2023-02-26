import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_equals_ObjectGenericAlias = _test_equals(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.equals(input),
);
