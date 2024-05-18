import { create } from "zustand";
import { v4 as uuid } from "uuid";

export interface Iprocedures {
  id?: string;
  description: string | number;
  code: string | number;
  reclaimed: number;
  variance: number;
  amountAuthorized: number;
}

interface Store {
  isModalOpen: boolean;
  isAddNewOpen: boolean;
  procedure: Iprocedures[];
  handleModal: () => void;
  handleModalPrecedure: () => void;
  onAddNewPrecedure: () => void;
  onCreateNewProcedure: (procedure: Iprocedures) => void;
  onEditProcedure: (
    key: string,
    value: string,
    index: number,
    id: string
  ) => void;
  onDeleteProcedure: (id: string) => void;
}
export const useProcedure = create<Store>()((set, get) => ({
  isModalOpen: false,
  isAddNewOpen: false,
  procedure: [
    
  ],

  handleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
  handleModalPrecedure: () => set(() => ({ isAddNewOpen: false })),
  onAddNewPrecedure: () => set(() => ({ isAddNewOpen: true })),
  onCreateNewProcedure: (newProcedure) => {
    newProcedure.id = uuid();

    set((state) => ({ procedure: [...state.procedure, newProcedure] }));
  },

  onEditProcedure: (key: string, value: string, index: number, id: string) => {
    const getprocedure: any = get().procedure[index];

    const test = get().procedure.map((item) => {
      if (item.id == id) {
        getprocedure[key] = value;
        set(
          (state) =>
            (state.procedure[index] = {
              ...getprocedure,
            })
        );
      }

      return item;
    });
    console.log(getprocedure);
    console.log(test);
    
  },

  onDeleteProcedure(id: string) {
    const deleteProcedure = get().procedure.filter(
      (procedure) => procedure.id != id
    );

    set(() => ({ procedure: [...deleteProcedure] }));
  },
}));
