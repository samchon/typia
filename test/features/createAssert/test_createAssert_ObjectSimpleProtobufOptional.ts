import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_createAssert_ObjectSimpleProtobufOptional = _test_assert(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional
)(typia.createAssert<ObjectSimpleProtobufOptional>());
