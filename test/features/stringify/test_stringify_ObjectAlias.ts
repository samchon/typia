import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_stringify_ObjectAlias = _test_stringify(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.stringify(input),
);
