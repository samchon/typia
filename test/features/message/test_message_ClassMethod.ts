import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_message } from "../internal/_test_message";

export const test_message_ClassMethod = _test_message(
    "ClassMethod",
    typia.message<ClassMethod>(),
);