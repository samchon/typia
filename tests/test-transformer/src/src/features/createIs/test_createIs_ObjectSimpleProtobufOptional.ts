import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_createIs_ObjectSimpleProtobufOptional = (): void => _test_is(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional
)(typia.createIs<ObjectSimpleProtobufOptional>());
