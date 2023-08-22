import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_is_ObjectSimpleProtobufOptional = _test_is(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)(
    typia.createIs<ObjectSimpleProtobufOptional>(),
);
