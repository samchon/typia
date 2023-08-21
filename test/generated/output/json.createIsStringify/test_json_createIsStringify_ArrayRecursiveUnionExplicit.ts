import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_isStringify_ArrayRecursiveUnionExplicit =
    _test_json_isStringify(
        "ArrayRecursiveUnionExplicit",
    )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
        (input: ArrayRecursiveUnionExplicit): string | null => {
            const is = (input: any): input is ArrayRecursiveUnionExplicit => {
                const $io0 = (input: any): boolean =>
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
                const $io1 = (input: any): boolean =>
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
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    "string" === typeof input.content &&
                    "file" === input.type &&
                    "txt" === input.extension;
                const $io3 = (input: any): boolean =>
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
                const $io4 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target) &&
                    "file" === input.type &&
                    "lnk" === input.extension;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $io0(input);
                        else if ("jpg" === input.extension) return $io1(input);
                        else if ("txt" === input.extension) return $io2(input);
                        else if ("zip" === input.extension) return $io3(input);
                        else if ("lnk" === input.extension) return $io4(input);
                        else return false;
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
            const stringify = (input: ArrayRecursiveUnionExplicit): string => {
                const $io0 = (input: any): boolean =>
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
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.width &&
                    "number" === typeof input.height &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size &&
                    "file" === input.type &&
                    "jpg" === input.extension;
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "string" === typeof input.content &&
                    "file" === input.type &&
                    "txt" === input.extension;
                const $io3 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "number" === typeof input.count &&
                    "file" === input.type &&
                    "zip" === input.extension;
                const $io4 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target) &&
                    "file" === input.type &&
                    "lnk" === input.extension;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $io0(input);
                        else if ("jpg" === input.extension) return $io1(input);
                        else if ("txt" === input.extension) return $io2(input);
                        else if ("zip" === input.extension) return $io3(input);
                        else if ("lnk" === input.extension) return $io4(input);
                        else return false;
                    })();
                const $number = (typia.json.createIsStringify as any).number;
                const $string = (typia.json.createIsStringify as any).string;
                const $throws = (typia.json.createIsStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{"id":${$number(input.id)},"name":${$string(
                        input.name,
                    )},"path":${$string(
                        input.path,
                    )},"children":${`[${input.children
                        .map((elem: any) => $su0(elem))
                        .join(",")}]`},"type":${(() => {
                        if ("string" === typeof input.type)
                            return $string(input.type);
                        if ("string" === typeof input.type)
                            return '"' + input.type + '"';
                        $throws({
                            expected: '"directory"',
                            value: input.type,
                        });
                    })()}}`;
                const $so1 = (input: any): any =>
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
                const $so2 = (input: any): any =>
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
                const $so3 = (input: any): any =>
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
                const $so4 = (input: any): any =>
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
                const $su0 = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $so0(input);
                        else if ("jpg" === input.extension) return $so1(input);
                        else if ("txt" === input.extension) return $so2(input);
                        else if ("zip" === input.extension) return $so3(input);
                        else if ("lnk" === input.extension) return $so4(input);
                        else
                            $throws({
                                expected:
                                    "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                                value: input,
                            });
                    })();
                return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
            };
            return is(input) ? stringify(input) : null;
        },
    );
