import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_message_DynamicTree = _test_message(
    "DynamicTree",
    typia.message<DynamicTree>(),
);
