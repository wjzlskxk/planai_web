import { create } from "zustand";

interface AuthStore {
  section: string;
  setSection: (section: string) => void;
}

export const authStore = create<AuthStore>((set) => ({
  section: "first",
  setSection: (section: string) => set(() => ({ section })),
}));
