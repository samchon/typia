import TSON from "../../src";

interface ISomething {
    anys: any[];
    numbers: number[];
    strings: string[];
    undefindable: any[] | undefined;
    nullables: any[] | null;
    both: any[] | undefined | null;
    union: Array<any | number | null | undefined>;
}

TSON.createStringify<ISomething>();
TSON.createStringify<any[]>();
TSON.createStringify<any[] | null>();
TSON.createStringify<any[] | undefined>();
TSON.createStringify<any[] | undefined | null>();
