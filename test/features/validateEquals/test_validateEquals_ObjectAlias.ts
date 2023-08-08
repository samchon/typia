import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_validateEquals_ObjectAlias = _test_validateEquals(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.validateEquals(input),
);
