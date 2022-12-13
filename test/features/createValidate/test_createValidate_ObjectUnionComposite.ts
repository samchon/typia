import typia from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectUnionComposite = _test_validate(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createValidate<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);