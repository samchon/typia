import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_validate_ObjectSimpleProtobufOptional = _test_validate(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional
)((input) => typia.validate<ObjectSimpleProtobufOptional>(input));
