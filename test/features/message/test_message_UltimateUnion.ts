import typia from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_UltimateUnion = _test_message(
    "UltimateUnion",
    typia.message<UltimateUnion>(),
);