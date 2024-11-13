import { createContext, PropsWithChildren, useContext } from "react";

type userdata = {
  userName: string;
  age: number | null;
  education: string | null;
};
// 1. Creating a context with initial values
const SimpleContext = createContext<userdata>({
  userName: "",
  age: null,
  education: null,
});

// 2. creating the context provider function
export function SimpleProvider({ children }: PropsWithChildren) {
  // Do whatever you want here , you may pull some data , alter the data or whatever then after processing just pass the data
  const processedData = {
    userName: "Alpha",
    age: 28,
    education: "B.Sc.",
  };
  return (
    <SimpleContext.Provider value={processedData}>
      {children}
    </SimpleContext.Provider>
  );
}

// export default SimpleContext;
// if we do like that i.e. just export the context we have to access the data like that all the time :
// const { userName, age, education } = useContext(SimpleContext);

// but we can make a function here which will use the useContext(SimpleContext) here instead of in the other files

export default function getData() {
  return useContext(SimpleContext);
}

//now you can call this anywhere in the app
