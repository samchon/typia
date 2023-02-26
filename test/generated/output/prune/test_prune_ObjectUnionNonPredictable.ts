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
            const $throws = (typia.prune as any).throws;
            const $io1 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $iu0(input.value);
            const $io2 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io3(input.value);
            const $io3 = (input: any): boolean =>
                "boolean" === typeof input.value;
            const $io4 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io5(input.value);
            const $io5 = (input: any): boolean =>
                "number" === typeof input.value;
            const $io6 = (input: any): boolean =>
                "object" === typeof input.value &&
                null !== input.value &&
                $io7(input.value);
            const $io7 = (input: any): boolean =>
                "string" === typeof input.value;
            const $iu0 = (input: any): any =>
                $io2(input) || $io4(input) || $io6(input);
            const $po0 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po1(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $pu0(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po2 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po3(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po3 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po4 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po5(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po5 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po6 = (input: any): any => {
                if ("object" === typeof input.value && null !== input.value)
                    $po7(input.value);
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $po7 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("value" === key) continue;
                    delete input[key];
                }
            };
            const $pu0 = (input: any): any =>
                (() => {
                    if ($io2(input)) return $po2(input);
                    if ($io4(input)) return $po4(input);
                    if ($io6(input)) return $po6(input);
                    $throws({
                        expected:
                            "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                        value: input,
                    });
                })();
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        })(input),
);
