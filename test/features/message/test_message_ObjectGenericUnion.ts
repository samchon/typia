import typia from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_message } from "../internal/_test_message";

export const test_message_ObjectGenericUnion = _test_message(
    "ObjectGenericUnion",
    typia.message<ObjectGenericUnion>(),
);