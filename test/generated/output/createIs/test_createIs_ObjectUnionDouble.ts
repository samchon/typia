import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createIs_ObjectUnionDouble = _test_is(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: any): input is ObjectUnionDouble => {
        const $io0: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "number" === typeof input.value.x &&
            Number.isFinite(input.value.x) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu1(input.child);
        const $io2: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "boolean" === typeof input.value.y;
        const $io4: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "number" === typeof input.value.y &&
            Number.isFinite(input.value.y);
        const $io6: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "string" === typeof input.value.x &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu2(input.child);
        const $io8: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "string" === typeof input.value.y;
        const $io10: any = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io11(input.value);
        const $io11: any = (input: any): boolean =>
            Array.isArray(input.y) &&
            input.y.every(
                (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
            );
        const $iu0: any = (input: any): any =>
            (() => {
                if ($io6(input)) return $io6(input);
                if ($io0(input)) return $io0(input);
                return false;
            })();
        const $iu1: any = (input: any): any =>
            (() => {
                if ($io4(input)) return $io4(input);
                if ($io2(input)) return $io2(input);
                return false;
            })();
        const $iu2: any = (input: any): any =>
            (() => {
                if ($io10(input)) return $io10(input);
                if ($io8(input)) return $io8(input);
                return false;
            })();
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $iu0(elem),
            )
        );
    },
    ObjectUnionDouble.SPOILERS,
);
