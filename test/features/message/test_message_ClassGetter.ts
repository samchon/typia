import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_message } from "../internal/_test_message";

export const test_message_ClassGetter = _test_message(
    "ClassGetter",
    typia.message<ClassGetter>(),
);