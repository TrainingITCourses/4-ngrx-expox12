import { Launch, Agency, Mission, Status } from './index';

export interface Global {
    launches: Launch[];
    agencies: Agency[];
    missions: Mission[];
    statuses: Status[];
    counter : number;
    critType: any;
    selectValue : number;
    filter: any;
}

export const globalinitialState: any = {
    launches: [],
    agencies: [],
    missions: [],
    statuses: [],
    counter : 0,
    critType: { id: 0, value: "status" },
    selectValue: 0,
    filter: {}
}