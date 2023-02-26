import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_createIs_ObjectUnionDouble = _test_is(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input: any): input is Array<ObjectUnionDouble.Union> => {
        const $io0 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "number" === typeof input.value.x &&
            Number.isFinite(input.value.x) &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu0(input.child);
        const $io2 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "boolean" === typeof input.value.y;
        const $io4 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "number" === typeof input.value.y &&
            Number.isFinite(input.value.y);
        const $io6 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "string" === typeof input.value.x &&
            "object" === typeof input.child &&
            null !== input.child &&
            $iu1(input.child);
        const $io8 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "string" === typeof input.value.y;
        const $io10 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io11(input.value);
        const $io11 = (input: any): boolean =>
            Array.isArray(input.y) &&
            input.y.every(
                (elem: any) =>
                    "number" === typeof elem && Number.isFinite(elem),
            );
        const $iu0 = (input: any): any =>
            (() => {
                if ($io2(input)) return $io2(input);
                if ($io4(input)) return $io4(input);
                return false;
            })();
        const $iu1 = (input: any): any =>
            (() => {
                if ($io8(input)) return $io8(input);
                if ($io10(input)) return $io10(input);
                return false;
            })();
        const $iu2 = (input: any): any =>
            (() => {
                if ($io0(input)) return $io0(input);
                if ($io6(input)) return $io6(input);
                return false;
            })();
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $iu2(elem),
            )
        );
    },
    ObjectUnionDouble.SPOILERS,
);
