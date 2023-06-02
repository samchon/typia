import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_isStringify_ArrayRecursiveUnionImplicit = _test_isStringify(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) =>
        ((input: Array<ArrayRecursiveUnionImplicit.IBucket>): string | null => {
            const is: any = (
                input: any,
            ): input is Array<ArrayRecursiveUnionImplicit.IBucket> => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    );
                const $io1: any = (input: any): boolean =>
                    ("read" === input.access || "write" === input.access) &&
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    );
                const $io2: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.width &&
                    Number.isFinite(input.width) &&
                    "number" === typeof input.height &&
                    Number.isFinite(input.height) &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size);
                const $io3: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    "string" === typeof input.content;
                const $io4: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    "number" === typeof input.count &&
                    Number.isFinite(input.count);
                const $io5: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target);
                const $iu0: any = (input: any): any =>
                    (() => {
                        if (undefined !== input.access) return $io1(input);
                        if (undefined !== input.width) return $io2(input);
                        if (undefined !== input.content) return $io3(input);
                        if (undefined !== input.count) return $io4(input);
                        if (undefined !== input.target) return $io5(input);
                        return $io0(input);
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    )
                );
            };
            const stringify: any = (
                input: Array<ArrayRecursiveUnionImplicit.IBucket>,
            ): string => {
                const $io0: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    );
                const $io1: any = (input: any): boolean =>
                    ("read" === input.access || "write" === input.access) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    );
                const $io2: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.width &&
                    "number" === typeof input.height &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size;
                const $io3: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "string" === typeof input.content;
                const $io4: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "number" === typeof input.count;
                const $io5: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target);
                const $iu0: any = (input: any): any =>
                    (() => {
                        if (undefined !== input.access) return $io1(input);
                        if (undefined !== input.width) return $io2(input);
                        if (undefined !== input.content) return $io3(input);
                        if (undefined !== input.count) return $io4(input);
                        if (undefined !== input.target) return $io5(input);
                        return $io0(input);
                    })();
                const $number: any = (typia.isStringify as any).number;
                const $string: any = (typia.isStringify as any).string;
                const $throws: any = (typia.isStringify as any).throws;
                const $so0: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"children":${(() =>
                        `[${input.children
                            .map((elem: any) => $su0(elem))
                            .join(",")}]`)()}}`;
                const $so1: any = (input: any): any =>
                    `{"access":${(() => {
                        if ("string" === typeof input.access)
                            return $string(input.access);
                        if ("string" === typeof input.access)
                            return '"' + input.access + '"';
                        $throws({
                            expected: '("read" | "write")',
                            value: input.access,
                        });
                    })()},"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"children":${(() =>
                        `[${input.children
                            .map((elem: any) => $su0(elem))
                            .join(",")}]`)()}}`;
                const $so2: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"width":${$number(
                        input.width,
                    )},"height":${$number(input.height)},"url":${$string(
                        input.url,
                    )},"size":${$number(input.size)}}`;
                const $so3: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"size":${$number(
                        input.size,
                    )},"content":${$string(input.content)}}`;
                const $so4: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"size":${$number(
                        input.size,
                    )},"count":${$number(input.count)}}`;
                const $so5: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"target":${$su0(
                        input.target,
                    )}}`;
                const $su0: any = (input: any): any =>
                    (() => {
                        if (undefined !== input.access) return $so1(input);
                        if (undefined !== input.width) return $so2(input);
                        if (undefined !== input.content) return $so3(input);
                        if (undefined !== input.count) return $so4(input);
                        if (undefined !== input.target) return $so5(input);
                        return $so0(input);
                    })();
                return (() =>
                    `[${input.map((elem: any) => $su0(elem)).join(",")}]`)();
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
