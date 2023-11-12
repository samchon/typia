import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_reflect_metadata_FunctionalValueUnion =
    _test_reflect_metadata("FunctionalValueUnion")(
        typia.reflect.metadata<[FunctionalValueUnion]>(),
    );
