import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_standardSchema_createValidate_ObjectSimpleProtobufOptional = (): void => _test_standardSchema_validate(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional
)(typia.createValidate<ObjectSimpleProtobufOptional>());
