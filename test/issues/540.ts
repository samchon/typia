import { v1, v3, v4, v5 } from "uuid";

import { $is_uuid } from "../../src/functional/$is_uuid";

for (let i: number = 0; i < 100_000; ++i) {
    const uuids: string[] = [
        v1(),
        v3("https://www.w3.org/", v3.URL),
        v4(),
        v5("https://www.w3.org/", v5.URL),
    ];
    if (uuids.every((u) => $is_uuid(u) === false))
        throw new Error("Failed to test the UUIDs");
}
