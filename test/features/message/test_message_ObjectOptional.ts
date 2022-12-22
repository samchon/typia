import typia from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectOptional = _test_message(
    "ObjectOptional",
    typia.message<ObjectOptional>(),
);