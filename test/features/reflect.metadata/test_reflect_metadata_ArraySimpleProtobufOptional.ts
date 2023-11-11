import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_reflect_metadata_ArraySimpleProtobufOptional =
    _test_reflect_metadata("ArraySimpleProtobufOptional")(
        typia.reflect.metadata<[ArraySimpleProtobufOptional]>(),
    );
