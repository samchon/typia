import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_json_stringify_ArraySimplePointer =
    _test_json_stringify<ArraySimplePointer>(ArraySimplePointer)((input) =>
        ((input: IPointer<Array<ArraySimplePointer.IPerson>>): string => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.email &&
                Array.isArray(input.hobbies) &&
                input.hobbies.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io2 = (input: any): boolean =>
                "string" === typeof input.name &&
                "string" === typeof input.body &&
                "number" === typeof input.rank;
            const $string = (typia.json.stringify as any).string;
            const $number = (typia.json.stringify as any).number;
            const $so0 = (input: any): any =>
                `{"value":${`[${input.value
                    .map((elem: any) => $so1(elem))
                    .join(",")}]`}}`;
            const $so1 = (input: any): any =>
                `{"name":${$string(input.name)},"email":${$string(
                    input.email,
                )},"hobbies":${`[${input.hobbies
                    .map(
                        (elem: any) =>
                            `{"name":${$string(
                                (elem as any).name,
                            )},"body":${$string(
                                (elem as any).body,
                            )},"rank":${$number((elem as any).rank)}}`,
                    )
                    .join(",")}]`}}`;
            return $so0(input);
        })(input),
    );
