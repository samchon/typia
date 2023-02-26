import typia from "../../../../src";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ObjectHierarchical = _test_stringify(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) =>
        ((input: ObjectHierarchical.ICustomer): string => {
            const $number = (typia.stringify as any).number;
            const $string = (typia.stringify as any).string;
            const $io1 = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.code &&
                "string" === typeof input.name &&
                "number" === typeof input.sequence &&
                "boolean" === typeof input.exclusive &&
                "number" === typeof input.priority &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io2(input.created_at);
            const $io2 = (input: any): boolean =>
                "number" === typeof input.time &&
                "number" === typeof input.zone;
            const $io3 = (input: any): boolean =>
                "number" === typeof input.id &&
                "object" === typeof input.account &&
                null !== input.account &&
                $io4(input.account) &&
                (null === input.enterprise ||
                    ("object" === typeof input.enterprise &&
                        null !== input.enterprise &&
                        $io5(input.enterprise))) &&
                Array.isArray(input.emails) &&
                input.emails.every((elem: any) => "string" === typeof elem) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io2(input.created_at) &&
                "boolean" === typeof input.authorized;
            const $io4 = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.code &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io2(input.created_at);
            const $io5 = (input: any): boolean =>
                "number" === typeof input.id &&
                "object" === typeof input.account &&
                null !== input.account &&
                $io4(input.account) &&
                "string" === typeof input.name &&
                "number" === typeof input.grade &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io2(input.created_at);
            const $so0 = (input: any): any =>
                `{"id":${$number(input.id)},"channel":${$so1(
                    input.channel,
                )},"member":${
                    null !== input.member ? $so3(input.member) : "null"
                },"account":${
                    null !== input.account ? $so4(input.account) : "null"
                },"href":${$string(input.href)},"referrer":${$string(
                    input.referrer,
                )},"ip":${`[${$number(input.ip[0])},${$number(
                    input.ip[1],
                )},${$number(input.ip[2])},${$number(
                    input.ip[3],
                )}]`},"created_at":${`{"time":${$number(
                    input.created_at.time,
                )},"zone":${$number(input.created_at.zone)}}`}}`;
            const $so1 = (input: any): any =>
                `{"id":${$number(input.id)},"code":${$string(
                    input.code,
                )},"name":${$string(input.name)},"sequence":${$number(
                    input.sequence,
                )},"exclusive":${input.exclusive},"priority":${$number(
                    input.priority,
                )},"created_at":${`{"time":${$number(
                    input.created_at.time,
                )},"zone":${$number(input.created_at.zone)}}`}}`;
            const $so3 = (input: any): any =>
                `{"id":${$number(input.id)},"account":${$so4(
                    input.account,
                )},"enterprise":${
                    null !== input.enterprise ? $so5(input.enterprise) : "null"
                },"emails":${`[${input.emails
                    .map((elem: any) => $string(elem))
                    .join(",")}]`},"created_at":${`{"time":${$number(
                    input.created_at.time,
                )},"zone":${$number(input.created_at.zone)}}`},"authorized":${
                    input.authorized
                }}`;
            const $so4 = (input: any): any =>
                `{"id":${$number(input.id)},"code":${$string(
                    input.code,
                )},"created_at":${`{"time":${$number(
                    input.created_at.time,
                )},"zone":${$number(input.created_at.zone)}}`}}`;
            const $so5 = (input: any): any =>
                `{"id":${$number(input.id)},"account":${$so4(
                    input.account,
                )},"name":${$string(input.name)},"grade":${$number(
                    input.grade,
                )},"created_at":${`{"time":${$number(
                    input.created_at.time,
                )},"zone":${$number(input.created_at.zone)}}`}}`;
            return $so0(input);
        })(input),
);
