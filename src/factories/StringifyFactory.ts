import crypto from "crypto";
import faster from "fast-json-stringify";
import { v4 } from "uuid";

import { IJsonApplication } from "../structures/IJsonApplication";

if (!crypto.randomUUID)
    crypto.randomUUID = () => v4();

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