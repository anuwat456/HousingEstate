import { BaseModel } from './../../_base/crud/models/_base.model';

export class Status extends BaseModel {
    id: number;
    title: string;
    isCoreRole: boolean = false;
    permissions: number[];

    clear(): void {
        this.id = undefined;
        this.title = '';
        this.isCoreRole = false;
        this.permissions = [];
	}
}
