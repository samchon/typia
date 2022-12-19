import typia from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ObjectAlias = _test_equals(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.equals(input),
);