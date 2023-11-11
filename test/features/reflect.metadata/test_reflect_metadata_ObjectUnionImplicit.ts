import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_reflect_metadata_ObjectUnionImplicit = _test_reflect_metadata(
    "ObjectUnionImplicit",
)(typia.reflect.metadata<[ObjectUnionImplicit]>());
