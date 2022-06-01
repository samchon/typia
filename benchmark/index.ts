import TSON from "../src";
import { Benchmark } from "./internal/Benchmark";

import { geometry } from "./data/geometry";
import { hierarchical } from "./data/hierarchical";
import { recursive } from "./data/recursive";
import { tree } from "./data/tree";

import { IAccount } from "./structures/IAccount";
import { ICategory } from "./structures/ICategory";
import { IChannel } from "./structures/IChannel";
import { ICustomer } from "./structures/ICustomer";
import { IMember } from "./structures/IMember";
import { IBox3D } from "./structures/IBox3D";
import { IPoint3D } from "./structures/IPoint3D";

// const defaultRegex = new RegExp('\\n|\\r|\\t|\\"|\\\\', 'gm');
// const escape = (regex = defaultRegex) => str => str.replace(regex, char => '\\' + char)

function string(str: string): string {
    if (str.length > 42) return JSON.stringify(str);

    const l = str.length;
    let result = "";
    let last = 0;
    let found = false;
    let surrogateFound = false;
    let point = 255;
    // eslint-disable-next-line
    for (let i = 0; i < l && point >= 32; i++) {
        point = str.charCodeAt(i);
        if (0xd800 <= point && point <= 0xdfff) {
            // The current character is a surrogate.
            surrogateFound = true;
            break;
        }
        if (point === 34 || point === 92) {
            result += str.slice(last, i) + "\\";
            last = i;
            found = true;
        }
    }

    if (!found) {
        result = str;
    } else {
        result += str.slice(last);
    }
    return point < 32 || surrogateFound === true
        ? JSON.stringify(str)
        : '"' + result + '"';
}

console.log(
    Benchmark.prepare(
        geometry,
        (input) => TSON.stringify<IBox3D>(input),
        TSON.createStringifier<IBox3D>(),
        (input) => {
            function point(input: IPoint3D): string {
                return `{
                    "x": ${input.x},
                    "y": ${input.y},
                    "z": ${input.z}
                }`;
            }
            function box(input: IBox3D): string {
                return `{
                    "scale": ${point(input.scale)},
                    "position": ${point(input.position)},
                    "rotate": ${point(input.rotate)},
                    "pivot": ${point(input.pivot)}
                }`;
            }
            return box(input);
        },
    )(),
);

console.log(
    Benchmark.prepare(
        hierarchical,
        (input) => TSON.stringify<ICustomer>(input),
        TSON.createStringifier<ICustomer>(),
        (input) => {
            function channel(input: IChannel): string {
                return `{
                    "id": ${input.id},
                    "code": ${string(input.code)},
                    "name": ${string(input.name)},
                    "sequence": ${input.sequence},
                    "exclusive": ${input.exclusive === true ? "true" : "false"}
                }`;
            }
            function member(input: IMember): string {
                return `{
                    "id": ${input.id},
                    "account": ${account(input.account)},
                    "emails": [${input.emails.map((e) => string(e)).join(",")}],
                    "created_at": ${string(input.created_at)}
                }`;
            }
            function account(input: IAccount): string {
                return `{
                    "id": ${input.id},
                    "code": ${string(input.code)},
                    "created_at": ${string(input.created_at)}
                }`;
            }
            function customer(input: ICustomer): string {
                return `{
                    "id": ${input.id},
                    "channel": ${channel(input.channel)},
                    "member": ${
                        input.member !== null ? member(input.member) : "null"
                    },
                    "href": ${string(input.href)},
                    "referrer": ${string(input.referrer)},
                    "ip": ${string(input.ip)},
                    "created_at": ${string(input.created_at)}
                }`;
            }
            return customer(input);
        },
    )(),

    Benchmark.prepare(
        recursive,
        (input) => TSON.stringify<ICategory.IInvert>(input),
        TSON.createStringifier<ICategory.IInvert>(),
        (input) => {
            function invert(input: ICategory.IInvert): string {
                return `{
                    "id": ${input.id},
                    "code": ${string(input.code)},
                    "name": ${string(input.name)},
                    "sequence": ${input.sequence},
                    "parent": ${
                        input.parent !== null ? invert(input.parent) : "null"
                    }
                }`;
            }
            return invert(input);
        },
    )(),

    Benchmark.prepare(
        tree,
        (input) => TSON.stringify<ICategory>(input),
        TSON.createStringifier<ICategory>(),
        (input: ICategory): string => {
            function category(input: ICategory): string {
                return `{
                    "id": ${input.id},
                    "code": ${string(input.code)},
                    "name": ${string(input.name)},
                    "sequence": ${input.sequence},
                    "children": [${input.children
                        .map((c) => category(c))
                        .join(",")}]
                }`;
            }
            return category(input);
        },
    )(),
);
