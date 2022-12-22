import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_message } from "../internal/_test_message";

export const test_message_ClassClosure = _test_message(
    "ClassClosure",
    typia.message<ClassClosure>(),
);