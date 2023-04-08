import fs from "fs";
import tgrid from "tgrid";

import { Spoiler } from "../../test/helpers/Spoiler";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";
import { ArrayRecursiveUnionExplicit } from "../../test/structures/ArrayRecursiveUnionExplicit";
import { ArrayRecursiveUnionImplicit } from "../../test/structures/ArrayRecursiveUnionImplicit";
import { ArraySimple } from "../../test/structures/ArraySimple";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";
import { ObjectSimple } from "../../test/structures/ObjectSimple";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";
import { UltimateUnion } from "../../test/structures/UltimateUnion";
import { IBenchmarkProgram } from "../programs/IBenchmarkProgram";
import { IMeasurement } from "../structures/IMeasurement";

const EXTENSION = __filename.substr(-2);

export namespace BenchmarkServer {
    export interface IAggregation {
        category: string;
        libraries: string[];
        types: string[];
        result: Record<string, Record<string, IMeasurement | null>>;
    }

    export async function measure(category: string): Promise<IAggregation> {
        console.log("---------------------------------------------------");
        console.log(`  ${category} benchmark`);
        console.log("---------------------------------------------------");

        const location: string = `${__dirname}/../programs/${category}`;
        const libraries: string[] = await findLibaries(location);
        const types: string[] = await findTypes(
            libraries.map((str) => `${location}/${str}`),
        );
        const result: Record<string, Record<string, IMeasurement | null>> = {};

        for (const type of types)
            result[type] = await measureType({
                category,
                type,
                libraries,
            });

        console.log("\n");
        return {
            category,
            libraries,
            types,
            result,
        };
    }

    const measureType = async (props: {
        category: string;
        type: string;
        libraries: string[];
    }): Promise<Record<string, IMeasurement | null>> => {
        console.log(`  - ${props.type}`);

        const result: Record<string, IMeasurement | null> = {};
        for (const library of props.libraries) {
            const file: string = `${__dirname}/../programs/${props.category}/${library}/benchmark-${props.category}-${library}-${props.type}.${EXTENSION}`;
            result[library] = fs.existsSync(file)
                ? await measureFunction(props.type)(file)
                : null;

            console.log(`    - ${library}:`, result[library] !== null);
        }
        return result;
    };

    const measureFunction =
        (type: string) =>
        async (file: string): Promise<IMeasurement | null> => {
            const factory = FACTORIES[type];
            const connector = new tgrid.protocols.workers.WorkerConnector(
                null,
                null,
                "process",
            );
            await connector.connect(file);

            const controller = connector.getDriver<IBenchmarkProgram<any>>();
            const tolerable = async () => {
                for (const s of factory.SPOILERS) {
                    const fake: any = factory.generate();
                    s(fake);
                    if ((await controller.validate(fake)) === true)
                        return false;
                }
                return true;
            };
            const input: any = factory.generate();
            const result: IMeasurement | null = await (async () => {
                const success = () => controller.measure(input);
                if (await controller.skip(type)) return success();
                else if ((await controller.validate(input)) === false)
                    return null;
                else if ((await tolerable()) === false) return null;
                return success();
            })();
            await connector.close();
            return result;
        };

    async function findLibaries(path: string): Promise<string[]> {
        const directory: string[] = [];
        for (const file of await fs.promises.readdir(path)) {
            const stats: fs.Stats = await fs.promises.stat(`${path}/${file}`);
            if (stats.isDirectory()) directory.push(file);
        }
        const index = (str: string) => LIBARIES.findIndex((s) => s === str);
        return directory.sort((x, y) => index(x) - index(y));
    }

    async function findTypes(directories: string[]): Promise<string[]> {
        const set: Set<string> = new Set();
        for (const directory of directories) {
            const files: string[] = await fs.promises.readdir(directory);
            files
                .filter((f) => f.includes("create") === false)
                .map((f) => f.split("-").at(-1)!)
                .map((str) => str.substring(0, str.length - 3))
                .forEach((str) => set.add(str));
        }
        const index = (str: string) =>
            Object.keys(FACTORIES).findIndex((s) => s === str);
        return [...set].sort((x, y) => index(x) - index(y));
    }

    interface IFactory<T> {
        generate(): T;
        SPOILERS: Spoiler<T>[];
    }
    const FACTORIES: Record<string, IFactory<any>> = {
        ObjectSimple: ObjectSimple,
        ObjectHierarchical: ObjectHierarchical,
        ObjectRecursive: ObjectRecursive,
        ObjectUnionExplicit: ObjectUnionExplicit,
        ObjectUnionImplicit: ObjectUnionImplicit,
        ArraySimple: ArraySimple,
        ArrayHierarchical: ArrayHierarchical,
        ArrayRecursive: ArrayRecursive,
        ArrayRecursiveUnionExplicit: ArrayRecursiveUnionExplicit,
        ArrayRecursiveUnionImplicit: ArrayRecursiveUnionImplicit,
        UltimateUnion: UltimateUnion,
    };
    const LIBARIES: string[] = [
        "typia",
        "typebox",
        "ajv",
        "io-ts",
        "zod",
        "class-validator",
        //
        "typia.stringify",
        "typia.isStringify",
        "typia.assertStringify",
        "fast-json-stringify",
        "JSON.stringify",
        "class-transformer",
    ];
}
