import * as tr from "class-transformer";
import * as cv from "class-validator";
import "reflect-metadata";

import { ClassValidatorTimestamp } from "./ClassValidatorTimestamp";

export class ClassValidatorObjectHierarchical {
    @cv.IsNumber()
    public id!: number;

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectHierarchical.Channel)
    public channel!: ClassValidatorObjectHierarchical.Channel;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectHierarchical.Member)
    public member!: ClassValidatorObjectHierarchical.Member | null;

    @cv.IsOptional()
    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorObjectHierarchical.Account)
    public account!: ClassValidatorObjectHierarchical.Account | null;

    @cv.IsString()
    public href!: string;

    @cv.IsString()
    public referrer!: string;

    @cv.IsArray()
    @cv.IsNumber({}, { each: true })
    public ip!: [number, number, number, number];

    @cv.ValidateNested()
    @cv.IsObject()
    @tr.Type(() => ClassValidatorTimestamp)
    public created_at!: ClassValidatorTimestamp;
}
export namespace ClassValidatorObjectHierarchical {
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
        @cv.IsObject()
        @tr.Type(() => ClassValidatorTimestamp)
        public created_at!: ClassValidatorTimestamp;
    }

    export class Account {
        @cv.IsNumber()
        public id!: number;

        @cv.IsString()
        public code!: string;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => ClassValidatorTimestamp)
        public created_at!: ClassValidatorTimestamp;
    }

    export class Member {
        @cv.IsNumber()
        public id!: number;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Account)
        public account!: Account;

        @cv.IsOptional()
        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Enterprise)
        public enterprise!: Enterprise | null;

        @cv.IsArray()
        @cv.IsString({ each: true })
        public emails!: string[];

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => ClassValidatorTimestamp)
        public created_at!: ClassValidatorTimestamp;

        @cv.IsBoolean()
        public authorized!: boolean;
    }

    export class Enterprise {
        @cv.IsNumber()
        public id!: number;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => Account)
        public account!: Account;

        @cv.IsString()
        public name!: string;

        @cv.IsNumber()
        public grade!: number;

        @cv.ValidateNested()
        @cv.IsObject()
        @tr.Type(() => ClassValidatorTimestamp)
        public created_at!: ClassValidatorTimestamp;
    }
}
