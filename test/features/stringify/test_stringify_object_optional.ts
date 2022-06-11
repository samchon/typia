import TSON from "../../../src";

export function test_stringify_object_optional(): void {
    (input: IParent) => TSON.stringify<IParent>(input);
}

interface IParent extends IChild {
    first: IChild;
    second: IChild | null;
    third: IChild | null | undefined;
    fourth?: IChild | null;
    fifth: IChild | undefined;
    seventh?: IChild;
}
interface IChild {
    name: string;
}
