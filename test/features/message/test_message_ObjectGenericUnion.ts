import typia from "../../../src";
import { _test_message } from "../../internal/_test_message";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_message_ObjectGenericUnion = _test_message(
    "ObjectGenericUnion",
    typia.message<ObjectGenericUnion>(),
);
