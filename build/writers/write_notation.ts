import { StringUtil } from "../utils/StringUtil";

interface IProps {
    method: string;
    mode: null | "assert" | "is" | "validate";
}
export const write_notation =
    (p: IProps) => (create: boolean) => (structure: string) =>
        `import typia from "../../../src";

import { _${file({
            ...p,
            method: "general",
        })(false)} } from "../../internal/_${file({
            ...p,
            method: "general",
        })(false)}";
import { ${structure} } from "../../structures/${structure}";

export const ${file(p)(create)}_${structure} =
    _${file({
        ...p,
        method: "general",
    })(false)}("${structure}")<${structure}>(
        ${structure}
    )<${type(p)}<${structure}>>({
        convert: ${functor(p)(create)(structure)},
        assert: typia.createAssert<${type(p)}<${structure}>>(),
    });
`;

const method = (p: IProps) => (create: boolean) =>
    [create ? "create" : null, p.mode, p.method]
        .filter((str) => !!str)
        .map((str, i) => (i === 0 ? str : StringUtil.capitalize(str!)))
        .join("");
const type = (p: IProps) => `typia.${StringUtil.capitalize(p.method)}Case`;
const file = (p: IProps) => (create: boolean) =>
    ["test", "notation", method(p)(create)].join("_");
const functor = (p: IProps) => (create: boolean) => (structure: string) =>
    create
        ? `typia.notations.${method(p)(true)}<${structure}>()`
        : `(input) => typia.notations.${method(p)(false)}<${structure}>(input)`;
