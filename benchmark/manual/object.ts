import ajv from "fast-json-stringify";
import TSON from "../../src";

interface ISomething {
    id: number;
    name: string;
}

export function object(): void {
    const app: TSON.IJsonApplication = TSON.application<[ISomething], "ajv">();

    const stringify = ajv(app.schemas[0] as any, {
        schema: {
            components: app.components,
        } as any,
    });
    console.log(Object.keys((stringify as any).constructor));
}
