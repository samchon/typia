import typia from "typia";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayRepeatedOptional = 
  _test_reflect_metadata("ArrayRepeatedOptional")(
    typia.reflect.metadata<[ArrayRepeatedOptional]>()
  );