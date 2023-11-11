import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_reflect_metadata_ArrayRepeatedRequired =
    _test_reflect_metadata("ArrayRepeatedRequired")(
        typia.reflect.metadata<[ArrayRepeatedRequired]>(),
    );
