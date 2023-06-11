import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createClone_UltimateUnion = _test_clone(
    "UltimateUnion",
    UltimateUnion.generate,
    typia.createClone<UltimateUnion>(),
);
