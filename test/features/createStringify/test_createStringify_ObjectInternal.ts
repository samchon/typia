import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createStringify_ObjectInternal = _test_stringify(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createStringify<ObjectInternal>(),
);
