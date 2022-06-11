import TSON from "../../../src";

export function test_stringify_to_json_to_class_closure(): void {
    const operator: Operator = new Operator(2, 3, 4);
    const json: string = TSON.stringify<Operator>(operator);
    const expected: string = JSON.stringify(operator);

    if (json !== expected)
        throw new Error(
            "Bug on TSON.stringify(): failed to understand the Object.toJSON() closure method.",
        );
}

class Operator {
    public constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly z: number,
    ) {}

    public readonly toJSON = () => this.x + this.y + this.z;
}
