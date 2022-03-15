export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Page {
  pageable?: string;
  totalElements?: number;
  totalPages?: number;
  last?: boolean;
  size?: number;
  number?: number;
  sort?: Sort;
  first?: boolean;
  numberOfElements?: number;
  empty?: boolean;
}
export interface ClientFull {
  id?:number,
  subscription?: string;
  name?: string;
  nickname?: string;
  status?: string;
  emails?: [
    {
      category?: {
        name?: string;
      };
      name?: string;
      email?: string;
    }
  ];
}
export interface ClientShort {
  id:number,
  subscription?: string;
  name?: string;
  nickname?: string;
  status?: string;
}

export interface ClientPage {
  content: ClientShort[];
  pageable: Page;
}
