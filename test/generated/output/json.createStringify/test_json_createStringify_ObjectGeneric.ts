import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_json_createStringify_ObjectGeneric = _test_json_stringify(
    "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)((input: ObjectGeneric): string => {
    const $io1 = (input: any): boolean =>
        "boolean" === typeof input.child_value &&
        "boolean" === typeof input.child_next;
    const $io3 = (input: any): boolean =>
        "number" === typeof input.child_value &&
        "number" === typeof input.child_next;
    const $io5 = (input: any): boolean =>
        "string" === typeof input.child_value &&
        "string" === typeof input.child_next;
    const $number = (typia.json.createStringify as any).number;
    const $string = (typia.json.createStringify as any).string;
    const $so0 = (input: any): any =>
        `{"value":${input.value},"child":${`{"child_value":${
            (input.child as any).child_value
        },"child_next":${
            (input.child as any).child_next
        }}`},"elements":${`[${input.elements
            .map(
                (elem: any) =>
                    `{"child_value":${(elem as any).child_value},"child_next":${
                        (elem as any).child_next
                    }}`,
            )
            .join(",")}]`}}`;
    const $so2 = (input: any): any =>
        `{"value":${$number(input.value)},"child":${`{"child_value":${$number(
            (input.child as any).child_value,
        )},"child_next":${$number(
            (input.child as any).child_next,
        )}}`},"elements":${`[${input.elements
            .map(
                (elem: any) =>
                    `{"child_value":${$number(
                        (elem as any).child_value,
                    )},"child_next":${$number((elem as any).child_next)}}`,
            )
            .join(",")}]`}}`;
    const $so4 = (input: any): any =>
        `{"value":${$string(input.value)},"child":${`{"child_value":${$string(
            (input.child as any).child_value,
        )},"child_next":${$string(
            (input.child as any).child_next,
        )}}`},"elements":${`[${input.elements
            .map(
                (elem: any) =>
                    `{"child_value":${$string(
                        (elem as any).child_value,
                    )},"child_next":${$string((elem as any).child_next)}}`,
            )
            .join(",")}]`}}`;
    return `[${$so0(input[0])},${$so2(input[1])},${$so4(input[2])}]`;
});
