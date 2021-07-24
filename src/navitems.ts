export interface Navitems {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: Navitems[];
}
