import typia from "typia";

type MaybeTwoStrings = {
    primary: string;
    secondary?: string;
};
type DefinitelyTwoStrings = MaybeTwoStrings;
console.log(
    JSON.stringify(typia.json.application<[DefinitelyTwoStrings]>(), null, 4),
);
