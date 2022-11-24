import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_ultimate_union =
    _test_assert_stringify(
        "ultimate union",
        UltimateUnion.generate,
        TSON.createAssertStringify<UltimateUnion>(),
    );
