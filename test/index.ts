import { DynamicImportIterator } from "./internal/DynamicImportIterator";
import { IPointer } from "./internal/IPointer";

async function main(): Promise<void> {
    // TEST FEATURES
    const counter: IPointer<number> = { value: 0 };
    const exceptions: Error[] = await DynamicImportIterator.force(
        __dirname + "/features",
        {
            prefix: "test",
            parameters: () => [],
            counter,
        },
    );

    // TERMINATE
    if (exceptions.length === 0) console.log("Success", counter.value);
    else {
        for (const exp of exceptions) console.log(exp);
        process.exit(-1);
    }
}
main().catch((exp) => {
    console.log(exp);
    process.exit(-1);
});
