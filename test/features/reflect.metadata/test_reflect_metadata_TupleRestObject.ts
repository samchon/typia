import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_reflect_metadata_TupleRestObject = _test_reflect_metadata(
  "TupleRestObject",
)(typia.reflect.metadata<[TupleRestObject]>());
