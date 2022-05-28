import TSON from "../../src";

export function fast_json_stringify_top_level_one_of(): void {
    const top = TSON.createStringifier<number | string>();
    const capsuled = TSON.createStringifier<IMember>();

    console.log("TOP LEVEL UNION");
    console.log(top.toString());
    console.log("-----------------------------------");
    console.log("THE CAPSULED UNION");
    console.log(capsuled.toString());
}

interface IMember {
    id: string;
    name: string;
    sex: number | string;
}
