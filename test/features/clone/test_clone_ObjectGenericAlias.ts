import typia from "../../../src";

import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectGenericAlias = _test_clone(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) => typia.clone(input),
);
