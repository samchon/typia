import fs from "fs";

import { TestMessageGenerator } from "../generate/TestMessageGenerator";
import { TestStructure } from "../generate/TestStructure";

async function load(): Promise<TestStructure<any>[]> {
    const path: string = `${__dirname}/../structures`;
    const output: TestStructure<any>[] = [];

    for (const file of await fs.promises.readdir(path)) {
        const location: string = `${path}/${file}`;
        const modulo: Record<string, TestStructure<any>> = await import(
            location
        );
        output.push({
            ...Object.values(modulo)[0],
            name: file.substring(0, file.length - 3),
        });
    }
    return output;
}

async function main() {
    const structures: TestStructure<any>[] = await load();
    await TestMessageGenerator.generate(structures);
    await TestMessageGenerator.fill();
}
main().catch(() => {});
