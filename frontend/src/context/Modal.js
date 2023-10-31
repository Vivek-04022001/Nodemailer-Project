import {createContext, useContext, useState} from 'react';

export const ModalContext = createContext({
    isModalOpen : null,
    setIsModalOpen : ()=> null,
});

export const ModalProvider = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const value = { isModalOpen, setIsModalOpen}
    

    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>

}

