import typia from "typia";

type MaybeTwoStrings = {
    primary: string;
    secondary?: string;
};
type DefinitelyTwoStrings = Required<MaybeTwoStrings>;
console.log(
    JSON.stringify(typia.application<[DefinitelyTwoStrings]>(), null, 4),
);
