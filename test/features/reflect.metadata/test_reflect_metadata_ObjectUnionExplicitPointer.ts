import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_reflect_metadata_ObjectUnionExplicitPointer =
    _test_reflect_metadata("ObjectUnionExplicitPointer")(
        typia.reflect.metadata<[ObjectUnionExplicitPointer]>(),
    );
