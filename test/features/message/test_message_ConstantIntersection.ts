import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_message_ConstantIntersection = _test_message(
    "ConstantIntersection",
    typia.message<ConstantIntersection>(),
);
