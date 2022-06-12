import TSON from "../../../src";

export function test_application_object(): void {
    const app = TSON.application<[IMember]>();
    app;
}

interface IMember {
    id: string | null;
    email: String;
    name: string;
    sex: "male" | "female" | 1 | 2 | null;
    age: number | null;
    dead: boolean | null;
}
