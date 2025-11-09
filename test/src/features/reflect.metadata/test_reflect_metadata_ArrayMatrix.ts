import typia from "typia";
import { ArrayMatrix } from "../../structures/ArrayMatrix";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayMatrix = (): void =>
  _test_reflect_metadata("ArrayMatrix")(
    typia.reflect.metadata<[ArrayMatrix]>()
  );