import TSON from "../../../src";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ObjectAlias = _test_assertStringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => TSON.assertStringify(input),
    ObjectAlias.SPOILERS,
);