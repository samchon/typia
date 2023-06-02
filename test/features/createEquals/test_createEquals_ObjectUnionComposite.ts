import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createEquals_ObjectUnionComposite = _test_equals(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createEquals<ObjectUnionComposite>(),
);
