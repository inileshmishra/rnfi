/**
 * Formdata interface.
 */
export interface Icici {
    slab_min: number;
    slab_max: number;
    value: number;
    is_fixed: number;
}

export interface Indus {
    slab_min: number;
    slab_max: number;
    value: number;
    is_fixed: number;
}

export interface Fino {
    slab_min: number;
    slab_max: number;
    value: number;
    is_fixed: number;
}

export interface Datum {
    icici: Icici;
    indus: Indus;
    fino: Fino;
}

export interface FormObject {
    status: boolean;
    statuscode: number;
    data: Datum[];
}
