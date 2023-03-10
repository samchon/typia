import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_message_ObjectOptional = _test_message(
    "ObjectOptional",
    typia.message<ObjectOptional>(),
);
