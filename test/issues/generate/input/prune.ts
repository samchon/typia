import typia from "../../../../src";

interface Dynamic {
    statics: Record<string, Static>;
}
interface Static {
    id: string;
    name: string;
}

typia.createPrune<Dynamic>();
