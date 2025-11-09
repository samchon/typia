import typia from "typia";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TupleRestObject = (): void =>
  _test_reflect_metadata("TupleRestObject")(
    typia.reflect.metadata<[TupleRestObject]>()
  );