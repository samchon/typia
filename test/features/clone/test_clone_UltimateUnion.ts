import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_clone_UltimateUnion = _test_clone(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.clone<UltimateUnion>(input),
);
