import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_message } from "../internal/_test_message";

export const test_message_DynamicTree = _test_message(
    "DynamicTree",
    typia.message<DynamicTree>(),
);