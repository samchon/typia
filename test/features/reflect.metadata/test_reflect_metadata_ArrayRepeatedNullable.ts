import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_reflect_metadata_ArrayRepeatedNullable =
    _test_reflect_metadata("ArrayRepeatedNullable")(
        typia.reflect.metadata<[ArrayRepeatedNullable]>(),
    );
