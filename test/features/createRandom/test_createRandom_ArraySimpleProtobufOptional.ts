import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_createRandom_ArraySimpleProtobufOptional = _test_random(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    random: typia.createRandom<ArraySimpleProtobufOptional>(),
    assert: typia.createAssert<ArraySimpleProtobufOptional>(),
});
