import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_random_ArraySimpleProtobufOptional = _test_random(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)({
    random: () => typia.random<ArraySimpleProtobufOptional>(),
    assert: typia.createAssert<ArraySimpleProtobufOptional>(),
});
