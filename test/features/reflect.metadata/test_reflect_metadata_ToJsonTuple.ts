import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_reflect_metadata_ToJsonTuple = _test_reflect_metadata(
  "ToJsonTuple",
)(typia.reflect.metadata<[ToJsonTuple]>());
