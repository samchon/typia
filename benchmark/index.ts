import TSON from "../src";

import { Benchmark } from "./internal/Benchmark";

import { geometry } from "./data/geometry";
import { hierarchical } from "./data/hierarchical";
import { recursive } from "./data/recursive";
import { tree } from "./data/tree";

import { IBox3D } from "./structures/IBox3D";
import { IAccount } from "./structures/IAccount";
import { ICategory } from "./structures/ICategory";
import { IChannel } from "./structures/IChannel";
import { ICustomer } from "./structures/ICustomer";
import { IMember } from "./structures/IMember";
import { IPoint3D } from "./structures/IPoint3D";
import { ITimestamp } from "./structures/ITimestamp";

// const defaultRegex = new RegExp('\\n|\\r|\\t|\\"|\\\\', 'gm');
// const escape = (regex = defaultRegex) => str => str.replace(regex, char => '\\' + char)

function timestamp(input: ITimestamp): string {
    return `{
        "time": ${input.time},
        "zone": ${input.zone}
    }`;
}
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

const closures: Array<() => Benchmark.IOutput> = [
    Benchmark.prepare(geometry, TSON.createStringifier<IBox3D>(), (input) => {
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
    }),
    Benchmark.prepare(
        hierarchical,
        TSON.createStringifier<ICustomer>(),
        (input) => {
            function channel(input: IChannel): string {
                return `{
                    "id": ${input.id},
                    "code": ${string(input.code)},
                    "name": ${string(input.name)},
                    "sequence": ${input.sequence},
                    "exclusive": ${input.exclusive === true ? "true" : "false"},
                    "priority": ${input.priority},
                    "created_at": ${timestamp(input.created_at)}
                }`;
            }
            function member(input: IMember): string {
                return `{
                    "id": ${input.id},
                    "account": ${account(input.account)},
                    "emails": [${input.emails.map((e) => string(e)).join(",")}],
                    "authorized": ${
                        input.authorized === true ? "true" : "false"
                    }
                    "created_at": ${timestamp(input.created_at)}
                }`;
            }
            function account(input: IAccount): string {
                return `{
                    "id": ${input.id},
                    "code": ${string(input.code)},
                    "created_at": ${timestamp(input.created_at)}
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
                    "ip": [${input.ip[0]}, ${input.ip[1]}, ${input.ip[2]}, ${
                    input.ip[3]
                }],
                    "created_at": ${timestamp(input.created_at)}
                }`;
            }
            return customer(input);
        },
    ),
    Benchmark.prepare(
        recursive,
        TSON.createStringifier<ICategory.IInvert>(),
        (input) => {
            function base(input: ICategory.IInvert): string {
                return `{
                    "id": ${input.id},
                    "name": ${string(input.name)},
                    "sequence": ${input.sequence},
                    "created_at": ${timestamp(input.created_at)},
                    "parent":`;
            }

            let content: string = "";
            let current: ICategory.IInvert | null = input;
            let count: number = 0;

            while (current !== null) {
                content += base(current);
                ++count;
                current = current.parent;
            }
            return content + "null" + "}".repeat(count);

            // function invert(input: ICategory.IInvert): string {
            //     return `{
            //         "id": ${input.id},
            //         "code": ${string(input.code)},
            //         "name": ${string(input.name)},
            //         "sequence": ${input.sequence},
            //         "created_at": ${timestamp(input.created_at)},
            //         "parent": ${
            //             input.parent === null ? "null" : invert(input.parent)
            //         }
            //     }`;
            // }
            // return invert(input);
        },
    ),
    Benchmark.prepare(
        tree,
        TSON.createStringifier<ICategory>(),
        (input: ICategory): string => {
            function head(input: ICategory): string {
                return `{
                    "id": ${input.id},
                    "code": ${string(input.code)},
                    "name": ${string(input.name)},
                    "sequence": ${input.sequence},
                    "created_at": ${timestamp(input.created_at)},
                    "children": [`;
            }

            let content: string = "";
            let count: number = 0;
            const stack: ICategory[] = [input];

            while (stack.length !== 0) {
                const top: ICategory = stack.pop()!;
                content += head(top);
                ++count;

                if (top.children.length !== 0)
                    stack.push(...top.children.reverse());
            }
            return content + "]}".repeat(count);

            // function category(input: ICategory): string {
            //     return `{
            //         "id": ${input.id},
            //         "code": ${string(input.code)},
            //         "name": ${string(input.name)},
            //         "sequence": ${input.sequence},
            //         "created_at": ${timestamp(input.created_at)},
            //         "children": [${input.children
            //             .map((c) => category(c))
            //             .join(",")}]
            //     }`;
            // }
            // return category(input);
        },
    ),
];

function main(): void {
    console.log(
        " Type | JSON.stringify() | TSON.stringify() v2 | TSON.stringify() v3 ",
    );
    console.log(
        "------|-----------------:|--------------------:|--------------------:",
    );

    for (const fn of closures) {
        const output: Benchmark.IOutput = fn();
        console.log(
            output.name,
            "|",
            output.json,
            "|",
            output.v2,
            "|",
            output.v3,
        );
    }
}
main();
