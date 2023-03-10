import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_message_ObjectUnionDouble = _test_message(
    "ObjectUnionDouble",
    typia.message<ObjectUnionDouble>(),
);
