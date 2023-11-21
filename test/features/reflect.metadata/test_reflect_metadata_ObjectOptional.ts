import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_reflect_metadata_ObjectOptional = _test_reflect_metadata(
  "ObjectOptional",
)(typia.reflect.metadata<[ObjectOptional]>());
