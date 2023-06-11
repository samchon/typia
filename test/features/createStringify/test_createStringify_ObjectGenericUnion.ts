import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_createStringify_ObjectGenericUnion = _test_stringify(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    typia.createStringify<ObjectGenericUnion>(),
);
