import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_message_ClassMethod = _test_message(
    "ClassMethod",
    typia.message<ClassMethod>(),
);
