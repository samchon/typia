import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_clone_ObjectGenericAlias = _test_clone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.clone(input),
);
