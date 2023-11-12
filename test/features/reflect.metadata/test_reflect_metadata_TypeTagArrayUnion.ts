import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_reflect_metadata_TypeTagArrayUnion = _test_reflect_metadata(
    "TypeTagArrayUnion",
)(typia.reflect.metadata<[TypeTagArrayUnion]>());
