import { IJsonApplication } from "../structures/IJsonApplication";
import { MapUtil } from "../utils/MapUtil";
import { StringifyFactory } from "../factories/StringifyFactory";

export namespace JsonMemory {
    export function stringify(
        key: string,
        closure: () => IJsonApplication,
    ): (input: any) => string {
        return MapUtil.take(dict, key, () =>
            StringifyFactory.generate(closure()),
        );
    }

    const dict: Map<string, (input: any) => string> = new Map();
}
