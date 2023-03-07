import { v1, v3, v4, v5, validate } from "uuid";

import { $is_uuid } from "../../src/functional/$is_uuid";

for (let i: number = 0; i < 100_000; ++i) {
    const uuids: string[] = [
        v1(),
        v3("https://www.w3.org/", v3.URL),
        v4(),
        v5("https://www.w3.org/", v5.URL),
    ];
    if (uuids.every((u) => $is_uuid(u) !== validate(u)))
        throw new Error("Failed to test the UUIDs");
}

const uuid: string = (() => {
    const uuid: string = v4();
    return uuid
        .split("-")
        .map((word) => "1" + word.substring(1))
        .join("-");
})();
console.log(uuid, $is_uuid(uuid), validate(uuid));
