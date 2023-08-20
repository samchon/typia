import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_clone_DynamicEnumeration = _test_clone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    (input) => typia.clone<DynamicEnumeration>(input),
);
