import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_isPrune_ObjectUnionNonPredictable = _test_isPrune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) =>
        ((
            input: any,
        ): input is Array<
            ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
        > => {
            const is: any = (
                input: any,
            ): input is Array<
                ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
            > => {
                const $io0: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io1(input.value);
                const $io1: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io2: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "boolean" === typeof input.value.value;
                const $io4: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "number" === typeof input.value.value &&
                    Number.isFinite(input.value.value);
                const $io6: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    "string" === typeof input.value.value;
                const $iu0: any = (input: any): any =>
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
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const prune: any = (
                input: Array<
                    ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>
                >,
            ): void => {
                const $io1: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io2: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io3(input.value);
                const $io3: any = (input: any): boolean =>
                    "boolean" === typeof input.value;
                const $io4: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io5(input.value);
                const $io5: any = (input: any): boolean =>
                    "number" === typeof input.value;
                const $io6: any = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $io7(input.value);
                const $io7: any = (input: any): boolean =>
                    "string" === typeof input.value;
                const $iu0: any = (input: any): any =>
                    $io6(input) || $io4(input) || $io2(input);
                const $throws: any = (typia.isPrune as any).throws;
                const $po0: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po1(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po1: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $pu0(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po2: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po3(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po3: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po4: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po5(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po5: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po6: any = (input: any): any => {
                    if ("object" === typeof input.value && null !== input.value)
                        $po7(input.value);
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                const $po7: any = (input: any): any => {
                    for (const key: any of Object.keys(input)) {
                        if ("value" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    (() =>
                        input.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $po0(elem);
                        }))();
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    ObjectUnionNonPredictable.SPOILERS,
);
