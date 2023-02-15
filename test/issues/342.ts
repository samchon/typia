import typia from "typia";

interface ISomething {
    anys: any[];
    numbers: number[];
    strings: string[];
    undefindable: any[] | undefined;
    nullables: any[] | null;
    both: any[] | undefined | null;
    union: Array<any | number | null | undefined>;
}

typia.createStringify<ISomething>();
typia.createStringify<any[]>();
typia.createStringify<any[] | null>();
typia.createStringify<any[] | undefined>();
typia.createStringify<any[] | undefined | null>();
