import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_reflect_metadata_ObjectHttpCommentTag = (): void =>
  _test_reflect_metadata("ObjectHttpCommentTag")(
    typia.reflect.metadata<[ObjectHttpCommentTag]>(),
  );
