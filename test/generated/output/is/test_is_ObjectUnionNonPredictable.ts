import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_is_ObjectUnionNonPredictable =
    _test_is<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)((input) =>
        ((
            input: any,
        ): input is Array<
            ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
        > => {
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
                "boolean" === typeof (input.value as any).value;
            const $io4 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "number" === typeof (input.value as any).value &&
                Number.isFinite((input.value as any).value);
            const $io6 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                "string" === typeof (input.value as any).value;
            const $iu0 = (input: any): any =>
                (() => {
                    if ($io6(input)) return $io6(input);
                    if ($io4(input)) return $io4(input);
                    if ($io2(input)) return $io2(input);
                    return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        })(input),
    );
