import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_reflect_metadata_ObjectClosure = _test_reflect_metadata(
    "ObjectClosure",
)(typia.reflect.metadata<[ObjectClosure]>());
