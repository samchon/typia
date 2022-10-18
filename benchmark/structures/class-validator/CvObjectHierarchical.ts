import * as tr from "class-transformer";
import * as cv from "class-validator";

import { CvTimestamp } from "./CvTimestamp";

export class CvObjectHierarchical {
    @cv.IsNumber()
    public id!: number;

    @cv.ValidateNested()
    @tr.Type(() => CvObjectHierarchical.Channel)
    public channel!: CvObjectHierarchical.Channel;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectHierarchical.Member)
    public member!: CvObjectHierarchical.Member | null;

    @cv.IsOptional()
    @cv.ValidateNested()
    @tr.Type(() => CvObjectHierarchical.Account)
    public account!: CvObjectHierarchical.Account | null;

    @cv.IsString()
    public href!: string;

    @cv.IsString()
    public referrer!: string;

    @cv.IsArray()
    @cv.IsNumber({}, { each: true })
    public ip!: [number, number, number, number];

    @cv.ValidateNested()
    @tr.Type(() => CvTimestamp)
    public created_at!: CvTimestamp;
}
export namespace CvObjectHierarchical {
    export class Channel {
        @cv.IsNumber()
        public id!: number;

        @cv.IsString()
        public code!: string;

        @cv.IsString()
        public name!: string;

        @cv.IsNumber()
        public sequence!: number;

        @cv.IsBoolean()
        public exclusive!: boolean;

        @cv.IsNumber()
        public priority!: number;

        @cv.ValidateNested()
        @tr.Type(() => CvTimestamp)
        public created_at!: CvTimestamp;
    }

    export class Account {
        @cv.IsNumber()
        public id!: number;

        @cv.IsString()
        public code!: string;

        @cv.ValidateNested()
        @tr.Type(() => CvTimestamp)
        public created_at!: CvTimestamp;
    }

    export class Member {
        @cv.IsNumber()
        public id!: number;

        @cv.ValidateNested()
        @tr.Type(() => Account)
        public account!: Account;

        @cv.IsOptional()
        @cv.ValidateNested()
        @tr.Type(() => Enterprise)
        public enterprise!: Enterprise | null;

        @cv.IsArray()
        @cv.IsString({ each: true })
        public emails!: string[];

        @cv.ValidateNested()
        @tr.Type(() => CvTimestamp)
        public created_at!: CvTimestamp;

        @cv.IsBoolean()
        public authorized!: boolean;
    }

    export class Enterprise {
        @cv.IsNumber()
        public id!: number;

        @cv.ValidateNested()
        @tr.Type(() => Account)
        public account!: Account;

        @cv.IsString()
        public name!: string;

        @cv.IsNumber()
        public grade!: number;

        @cv.ValidateNested()
        @tr.Type(() => CvTimestamp)
        public created_at!: CvTimestamp;
    }
}
