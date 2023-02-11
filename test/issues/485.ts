import typia from "../../src";

interface IMember {
    id: string;
    name: number;
    company: ICompany;
}
interface ICompany {
    id: string;
    code: string;
}

console.log(typia.createPrune<IMember>().toString());
