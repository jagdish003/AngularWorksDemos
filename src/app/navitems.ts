export interface Navitems {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    IsCalled?: number;
    IsDataFound?: number;

    children?: Navitems[];
}
