import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_message_UltimateUnion = _test_message(
    "UltimateUnion",
    typia.message<UltimateUnion>(),
);
