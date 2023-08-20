import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_stringify_UltimateUnion = _test_stringify(
    "UltimateUnion",
    UltimateUnion.generate,
    (input) => typia.stringify<UltimateUnion>(input),
);
