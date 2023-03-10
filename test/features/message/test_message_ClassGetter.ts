import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_message_ClassGetter = _test_message(
    "ClassGetter",
    typia.message<ClassGetter>(),
);
