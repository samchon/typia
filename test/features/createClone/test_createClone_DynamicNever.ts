import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createClone_DynamicNever = _test_clone(
    "DynamicNever",
    DynamicNever.generate,
    typia.createClone<DynamicNever>(),
);
