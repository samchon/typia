import typia from "../../../src";

import { _test_random } from "../../internal/_test_random";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_createRandom_ObjectSimpleProtobufOptional = _test_random("ObjectSimpleProtobufOptional")<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional
)({
    random: typia.createRandom<ObjectSimpleProtobufOptional>(),
    assert: typia.createAssert<ObjectSimpleProtobufOptional>(),
});
