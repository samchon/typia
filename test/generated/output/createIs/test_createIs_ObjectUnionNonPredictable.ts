import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_createIs_ObjectUnionNonPredictable = _test_is(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input: any): input is ObjectUnionNonPredictable => {
        const $io0 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io1(input.value);
        const $io1 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $iu0(input.value);
        const $io2 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "boolean" === typeof input.value.value;
        const $io4 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "number" === typeof input.value.value &&
            Number.isFinite(input.value.value);
        const $io6 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "string" === typeof input.value.value;
        const $iu0 = (input: any): any =>
            (() => {
                if ($io2(input)) return $io2(input);
                if ($io4(input)) return $io4(input);
                if ($io6(input)) return $io6(input);
                return false;
            })();
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
            )
        );
    },
    ObjectUnionNonPredictable.SPOILERS,
);
