import { create } from "zustand";

interface UploadModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUploadModal = create<UploadModalStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    return set({ isOpen: true });
  },
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
