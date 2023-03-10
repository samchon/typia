import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_equals_ObjectUnionDouble = _test_equals(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is Array<ObjectUnionDouble.Union> => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io1(input.value, true && _exceptionable) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu0(input.child, true && _exceptionable) &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["value", "child"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io1 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.x &&
                Number.isFinite(input.x) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["x"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io2 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io3(input.value, true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["value"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io3 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "boolean" === typeof input.y &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["y"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io4 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io5(input.value, true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["value"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io5 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "number" === typeof input.y &&
                Number.isFinite(input.y) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["y"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io6 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io7(input.value, true && _exceptionable) &&
                "object" === typeof input.child &&
                null !== input.child &&
                $iu1(input.child, true && _exceptionable) &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["value", "child"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io7 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.x &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["x"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io8 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io9(input.value, true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["value"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io9 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.y &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["y"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io10 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io11(input.value, true && _exceptionable) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["value"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $io11 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                Array.isArray(input.y) &&
                input.y.every(
                    (elem: any, _index2: number) =>
                        "number" === typeof elem && Number.isFinite(elem),
                ) &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["y"].some((prop) => key === prop)) return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            const $iu0 = (input: any, _exceptionable: boolean = true): any =>
                (() => {
                    if ($io2(input, false && _exceptionable))
                        return $io2(input, true && _exceptionable);
                    if ($io4(input, false && _exceptionable))
                        return $io4(input, true && _exceptionable);
                    return false;
                })();
            const $iu1 = (input: any, _exceptionable: boolean = true): any =>
                (() => {
                    if ($io8(input, false && _exceptionable))
                        return $io8(input, true && _exceptionable);
                    if ($io10(input, false && _exceptionable))
                        return $io10(input, true && _exceptionable);
                    return false;
                })();
            const $iu2 = (input: any, _exceptionable: boolean = true): any =>
                (() => {
                    if ($io0(input, false && _exceptionable))
                        return $io0(input, true && _exceptionable);
                    if ($io6(input, false && _exceptionable))
                        return $io6(input, true && _exceptionable);
                    return false;
                })();
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        "object" === typeof elem &&
                        null !== elem &&
                        $iu2(elem, true),
                )
            );
        })(input),
);
