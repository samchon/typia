import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createStringify_ObjectUnionComposite = _test_stringify(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createStringify<ObjectUnionComposite>(),
);
