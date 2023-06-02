import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_isStringify_ArrayRecursiveUnionExplicit = _test_isStringify(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) =>
        ((input: Array<ArrayRecursiveUnionExplicit.IBucket>): string | null => {
            const is: any = (
                input: any,
            ): input is Array<ArrayRecursiveUnionExplicit.IBucket> => {
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
                    ) &&
                    "directory" === input.type;
                const $io1: any = (input: any): boolean =>
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
                    Number.isFinite(input.size) &&
                    "file" === input.type &&
                    "jpg" === input.extension;
                const $io2: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    "string" === typeof input.content &&
                    "file" === input.type &&
                    "txt" === input.extension;
                const $io3: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    "number" === typeof input.count &&
                    Number.isFinite(input.count) &&
                    "file" === input.type &&
                    "zip" === input.extension;
                const $io4: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target) &&
                    "file" === input.type &&
                    "lnk" === input.extension;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $io0(input);
                        if ("jpg" === input.extension) return $io1(input);
                        if ("txt" === input.extension) return $io2(input);
                        if ("zip" === input.extension) return $io3(input);
                        if ("lnk" === input.extension) return $io4(input);
                        return false;
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
                input: Array<ArrayRecursiveUnionExplicit.IBucket>,
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
                    ) &&
                    "directory" === input.type;
                const $io1: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.width &&
                    "number" === typeof input.height &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size &&
                    "file" === input.type &&
                    "jpg" === input.extension;
                const $io2: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "string" === typeof input.content &&
                    "file" === input.type &&
                    "txt" === input.extension;
                const $io3: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "number" === typeof input.count &&
                    "file" === input.type &&
                    "zip" === input.extension;
                const $io4: any = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target) &&
                    "file" === input.type &&
                    "lnk" === input.extension;
                const $iu0: any = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $io0(input);
                        if ("jpg" === input.extension) return $io1(input);
                        if ("txt" === input.extension) return $io2(input);
                        if ("zip" === input.extension) return $io3(input);
                        if ("lnk" === input.extension) return $io4(input);
                        return false;
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
                            .join(",")}]`)()},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"directory"',
                            value: input.type,
                        });
                    })()}}`;
                const $so1: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"width":${$number(
                        input.width,
                    )},"height":${$number(input.height)},"url":${$string(
                        input.url,
                    )},"size":${$number(input.size)},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"file"',
                            value: input.type,
                        });
                    })()},"extension":${(() => {
                        if ("string" === typeof input.extension)
                            return $string(input.extension);
                        if ("string" === typeof input.extension)
                            return '"' + input.extension + '"';
                        $throws({
                            expected: '"jpg"',
                            value: input.extension,
                        });
                    })()}}`;
                const $so2: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"size":${$number(
                        input.size,
                    )},"content":${$string(input.content)},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"file"',
                            value: input.type,
                        });
                    })()},"extension":${(() => {
                        if ("string" === typeof input.extension)
                            return $string(input.extension);
                        if ("string" === typeof input.extension)
                            return '"' + input.extension + '"';
                        $throws({
                            expected: '"txt"',
                            value: input.extension,
                        });
                    })()}}`;
                const $so3: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"size":${$number(
                        input.size,
                    )},"count":${$number(input.count)},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"file"',
                            value: input.type,
                        });
                    })()},"extension":${(() => {
                        if ("string" === typeof input.extension)
                            return $string(input.extension);
                        if ("string" === typeof input.extension)
                            return '"' + input.extension + '"';
                        $throws({
                            expected: '"zip"',
                            value: input.extension,
                        });
                    })()}}`;
                const $so4: any = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(input.path)},"target":${$su0(
                        input.target,
                    )},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"file"',
                            value: input.type,
                        });
                    })()},"extension":${(() => {
                        if ("string" === typeof input.extension)
                            return $string(input.extension);
                        if ("string" === typeof input.extension)
                            return '"' + input.extension + '"';
                        $throws({
                            expected: '"lnk"',
                            value: input.extension,
                        });
                    })()}}`;
                const $su0: any = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $so0(input);
                        if ("jpg" === input.extension) return $so1(input);
                        if ("txt" === input.extension) return $so2(input);
                        if ("zip" === input.extension) return $so3(input);
                        if ("lnk" === input.extension) return $so4(input);
                        $throws({
                            expected:
                                "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                            value: input,
                        });
                    })();
                return (() =>
                    `[${input.map((elem: any) => $su0(elem)).join(",")}]`)();
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
