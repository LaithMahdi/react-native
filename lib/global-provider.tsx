import { createContext } from "react";
import { useAppwrite } from "./useAppwrite";

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

interface GlobalContextType {
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
  refetch: (newParams?: Record<string, string | number>) => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);


export const GlobalProvide = ({ children }: { children: React.ReactNode }) => {
    const {} = useAppwrite({})

    <GlobalContext.Provider value={{}}>
        {children}
    </GlobalContext.Provider>
}