import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createClone_DynamicSimple = _test_clone(
    "DynamicSimple",
    DynamicSimple.generate,
    typia.createClone<DynamicSimple>(),
);
