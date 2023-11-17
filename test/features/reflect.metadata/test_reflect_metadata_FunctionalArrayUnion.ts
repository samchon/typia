import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_reflect_metadata_FunctionalArrayUnion =
  _test_reflect_metadata("FunctionalArrayUnion")(
    typia.reflect.metadata<[FunctionalArrayUnion]>(),
  );
