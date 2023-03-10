import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_message_ObjectAlias = _test_message(
    "ObjectAlias",
    typia.message<ObjectAlias>(),
);
