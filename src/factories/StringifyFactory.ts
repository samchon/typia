import faster from "fast-json-stringify";
import { IJsonApplication } from "../structures/IJsonApplication";

export namespace StringifyFactory
{
    export function generate(application: IJsonApplication): (input: any) => string
    {
        return faster(application.schema as any, {
            schema: {
                components: application.components
            } as any
        });
    }
}