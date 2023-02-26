import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_clone_ObjectAlias = _test_clone(
    "ObjectAlias",
    ObjectAlias.generate,
    (input) => typia.clone(input),
);
