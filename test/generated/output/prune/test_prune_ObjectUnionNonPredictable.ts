import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_prune_ObjectUnionNonPredictable = _test_prune(
    "ObjectUnionNonPredictable",
    ObjectUnionNonPredictable.generate,
    (input) =>
        ((
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
            const $throws: any = (typia.prune as any).throws;
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
        })(input),
);
